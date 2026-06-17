import { highlight } from "sugar-high";
import parse, {
  domToReact,
  Element,
  Text,
  type HTMLReactParserOptions,
} from "html-react-parser";
import type { CSSProperties } from "react";
import { VideoWrapper } from "./video-wrapper";
import { CustomImage } from "./CustomImage";

type Props = {
  content: string;
};

type DomNodes = Parameters<typeof domToReact>[0];

const parseStyleString = (styleString: string): CSSProperties => {
  return styleString.split(";").reduce<CSSProperties>((acc, style) => {
    const [key, value] = style.split(":").map((s) => s?.trim());
    if (key && value) {
      const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      return { ...acc, [camelKey]: value };
    }
    return acc;
  }, {});
};

const getCodeText = (element: Element) => {
  const codeElement = element.children[0];
  if (!(codeElement instanceof Element)) {
    return "";
  }

  const textNode = codeElement.children[0];
  return textNode instanceof Text ? textNode.data : "";
};

const parserOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (!(domNode instanceof Element)) {
      return;
    }

    if (domNode.name === "video") {
      const { src } = domNode.attribs || {};
      return src ? <VideoWrapper src={src} /> : undefined;
    }

    if (domNode.name === "img") {
      const { style, ...rest } = domNode.attribs || {};
      const parsedStyle = style ? parseStyleString(style) : undefined;
      const { src } = rest;

      return src ? (
        <CustomImage {...rest} src={src} style={parsedStyle} />
      ) : undefined;
    }

    if (domNode.name === "a") {
      const { style, ...rest } = domNode.attribs || {};
      const parsedStyle = style ? parseStyleString(style) : undefined;
      return (
        <a
          {...rest}
          style={parsedStyle}
          target="_blank"
          className="text-blue-500 underline hover:text-blue-600"
        >
          {domToReact(domNode.children as DomNodes, parserOptions)}
        </a>
      );
    }

    if (domNode.name === "pre") {
      const { style, ...rest } = domNode.attribs || {};
      const parsedStyle = style ? parseStyleString(style) : undefined;
      const highlighted = highlight(getCodeText(domNode));

      return (
        <pre {...rest} style={parsedStyle}>
          <code dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
      );
    }
  },
};

export const ContentRenderer = ({ content }: Props) => {
  return (
    <div className="prose prose-img:rounded-lg prose-img:shadow-lg prose-code:reset  prose-headings:tracking-tight prose-headings:text-2xl  prose-headings:text-slate-800 prose-headings:font-medium prose-headings:mt-24 [&_ul>li>p]:my-0 [&_h2]:mt-6">
      {parse(content, parserOptions)}
    </div>
  );
};
