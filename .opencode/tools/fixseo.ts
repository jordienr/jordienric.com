import { tool } from "@opencode-ai/plugin"
import { spawn } from "child_process"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))

export default tool({
  description: "Scan a website for SEO issues and get a detailed report",
  args: {
    url: tool.schema.string().describe("The URL to scan for SEO issues"),
    maxPages: tool.schema.number().optional().describe("Maximum pages to crawl (default: 25)"),
    maxDepth: tool.schema.number().optional().describe("Maximum crawl depth (default: 10)"),
    includeSitemap: tool.schema.boolean().optional().describe("Use sitemap to discover pages (default: true)"),
    outputFormat: tool.schema.enum(["json", "markdown", "terminal"]).optional().describe("Output format: json, markdown, or terminal (default: json)"),
    serve: tool.schema.boolean().optional().describe("Serve interactive HTML report locally (default: false)"),
    outputPath: tool.schema.string().optional().describe("Save report to file path"),
  },
  async execute(args) {
    const isLocal = process.cwd().includes("fixseo")
    const fixseoPath = isLocal 
      ? join(__dirname, "../../src/index.ts")
      : "fixseo"

    const cmd = isLocal ? ["bun", "run", fixseoPath] : ["npx", "-y", fixseoPath]
    cmd.push(args.url)
    
    if (args.maxPages) cmd.push("--max-pages=" + args.maxPages)
    if (args.maxDepth) cmd.push("--max-depth=" + args.maxDepth)
    if (args.includeSitemap === false) cmd.push("--no-sitemap")
    
    if (args.serve) {
      cmd.push("--serve")
    } else if (args.outputFormat === "markdown") {
      cmd.push("--markdown")
    } else if (args.outputFormat === "terminal") {
      // terminal is default when not json
    } else {
      cmd.push("--json")
    }
    
    if (args.outputPath) {
      cmd.push("--output=" + args.outputPath)
      if (args.outputFormat === "markdown" || !args.outputFormat) {
        cmd.push("--format=markdown")
      }
    }

    return new Promise((resolve) => {
      const proc = spawn(cmd[0], cmd.slice(1), { shell: true })
      let stdout = ""
      let stderr = ""
      
      proc.stdout.on("data", (data) => { stdout += data.toString() })
      proc.stderr.on("data", (data) => { stderr += data.toString() })
      
      proc.on("close", (code) => {
        if (code !== 0 && stderr) {
          resolve("Error: " + stderr)
        } else if (args.serve) {
          resolve("Server started. Check the URL in the output above.")
        } else if (args.outputPath) {
          resolve("Report saved to " + args.outputPath + "\n\n" + stdout)
        } else {
          // Try to extract JSON from output
          const jsonMatch = stdout.match(/{[sS]*}/)
          if (jsonMatch) {
            try {
              resolve(JSON.parse(jsonMatch[0]))
            } catch {
              resolve(stdout)
            }
          } else {
            resolve(stdout)
          }
        }
      })
    })
  },
})
