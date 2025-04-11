import Link from "next/link";
import { highlight } from "sugar-high";
import ReactPlayer from "react-player";
import parse, { domToReact } from "html-react-parser";
import { VideoWrapper } from "./video-wrapper";

type Props = {
  content: string;
};

export const ContentRenderer = ({ content }: Props) => {
  // images.forEach((img) => {
  //   img.setAttribute("loading", "lazy");
  //   img.setAttribute("decoding", "async");
  // });

  // links.forEach((link) => {
  //   link.setAttribute("target", "_blank");
  // });

  // codeBlocks.forEach((codeBlock) => {
  //   const text = codeBlock.textContent;
  //   if (!text) return;
  //   const highlighted = highlight(text);
  //   codeBlock.innerHTML = highlighted;
  // });

  const parseStyleString = (styleString: string) => {
    return styleString.split(";").reduce((acc: any, style) => {
      const [key, value] = style.split(":").map((s) => s?.trim());
      if (key && value) {
        // Convert kebab-case to camelCase
        const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        acc[camelKey] = value;
      }
      return acc;
    }, {});
  };

  const CustomHTMLRenderer = ({ htmlString }: { htmlString: string }) => {
    return parse(htmlString, {
      replace: (domNode: any) => {
        if (domNode.name === "video") {
          const { style, ...rest } = domNode.attribs || {};
          const parsedStyle = style ? parseStyleString(style) : undefined;
          return <VideoWrapper {...rest} style={parsedStyle} />;
        }

        if (domNode.name === "img") {
          const { style, ...rest } = domNode.attribs || {};
          const parsedStyle = style ? parseStyleString(style) : undefined;
          return <img {...rest} style={parsedStyle} />;
        }

        if (domNode.name === "a") {
          const { style, ...rest } = domNode.attribs || {};
          const parsedStyle = style ? parseStyleString(style) : undefined;
          return (
            <a {...rest} style={parsedStyle} target="_blank">
              {domToReact(domNode.children)}
            </a>
          );
        }

        if (domNode.name === "pre") {
          const { style, ...rest } = domNode.attribs || {};
          const parsedStyle = style ? parseStyleString(style) : undefined;
          const highlighted = highlight(domNode?.innerHTML);
          return (
            <pre {...rest} style={parsedStyle}>
              {highlighted}
            </pre>
          );
        }
      },
    });
  };
  return (
    <div className="prose prose-img:rounded-lg prose-img:shadow-lg prose-code:reset  prose-headings:tracking-tight prose-headings:text-2xl prose-headings:font-serif prose-headings:text-slate-800 prose-headings:font-light prose-headings:mt-24 [&_ul>li>p]:my-0">
      <CustomHTMLRenderer htmlString={content} />
    </div>
  );
};
