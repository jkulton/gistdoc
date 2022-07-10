import dynamic from "next/dynamic";
import React, { PropsWithChildren, useState, Suspense } from "react";

const SyntaxHighlighter = dynamic(
  () => import("../syntax-highlighter/syntax-highlighter"),
  {
    suspense: true,
  }
);

interface CodeBlockProps {
  inline?: boolean;
  className?: string;
}

export default function CodeBlock({
  children,
  className,
  inline,
}: PropsWithChildren<CodeBlockProps>) {
  if (!children) {
    return null;
  }

  if (inline) {
    return (
      <code data-inline="data-inline" className={className}>
        {children}
      </code>
    );
  }

  const language = className.replace("language-", "");
  const codeToParse = String(children?.[0] || "");

  return (
    <code className={className}>
      <Suspense fallback={codeToParse}>
        <SyntaxHighlighter language={language} code={codeToParse} />
      </Suspense>
    </code>
  );
}
