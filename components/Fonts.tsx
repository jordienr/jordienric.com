"use client";

import { IBM_Plex_Mono as MonoFont } from "next/font/google";
import { useServerInsertedHTML } from "next/navigation";

const mono = MonoFont({
  subsets: ["latin"],
  variable: "--font-family-mono",
  fallback: ["monospace"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

function Fonts() {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --font-family-mono: ${mono.style.fontFamily}, 'monospace';
          }
        `,
        }}
      />
    );
  });

  return null;
}

export default Fonts;
