import React from "react";
import Link from "next/link";
import Image from "next/image";
import { evaluate } from "@mdx-js/mdx";
import * as jsxRuntime from "react/jsx-runtime";
import * as jsxDevRuntime from "react/jsx-dev-runtime";
import { highlight } from "sugar-high";
import { TweetComponent } from "./tweet";
import { CaptionComponent } from "./caption";
import { YouTubeComponent } from "./youtube";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";

function CustomLink(props) {
  let href = props.href;
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr className="text-left">{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function Strikethrough(props) {
  return <del {...props} />;
}

function Callout(props) {
  return (
    <div className="px-4 py-3 bg-[#F7F7F7] dark:bg-[#181818] rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout leading-relaxed">{props.children}</div>
    </div>
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const Heading = ({ children }) => {
    const slug = slugify(children);
    return (
      <Tag id={slug}>
        <a href={`#${slug}`} key={`link-${slug}`} className="anchor" />
        {children}
      </Tag>
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  StaticTweet: TweetComponent,
  Caption: CaptionComponent,
  YouTube: YouTubeComponent,
  code: Code,
  Table,
  del: Strikethrough,
  Callout,
};

export async function CustomMDX(props) {
  const { default: MDXContent } = await evaluate(props.source, {
    Fragment: jsxRuntime.Fragment,
    jsx: jsxRuntime.jsx,
    jsxs: jsxRuntime.jsxs,
    jsxDEV: jsxDevRuntime.jsxDEV,
    development: process.env.NODE_ENV === "development",
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [rehypeKatex],
  } as any);

  return (
    <MDXContent
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
