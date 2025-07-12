/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { highlight } from "sugar-high";
import parse, { domToReact } from "html-react-parser";
import { VideoWrapper } from "./video-wrapper";
import { CustomImage } from "./CustomImage";

type Props = {
  content: string;
};

export const ContentRenderer = ({ content }: Props) => {
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

          return <CustomImage {...rest} style={parsedStyle} />;
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
    <div className="prose prose-img:rounded-lg prose-img:shadow-lg prose-code:reset  prose-headings:tracking-tight prose-headings:text-2xl  prose-headings:text-slate-800 prose-headings:font-medium prose-headings:mt-24 [&_ul>li>p]:my-0 [&_h2]:mt-6">
      <CustomHTMLRenderer htmlString={content} />
    </div>
  );
};
