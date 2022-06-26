import dynamic from "next/dynamic";
import React, { PropsWithChildren, useState } from "react";

const SyntaxHighlighter = dynamic(
  () => import("../syntax-highlighter/syntax-highlighter")
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

  const [codeViewLoaded, setCodeViewLoaded] = useState(false);

  if (inline) {
    return (
      <code data-inline="data-inline" className={className}>
        {children}
      </code>
    );
  }

  const language = className.replace("language-", "");
  return (
    <code className={className}>
      {codeViewLoaded ? null : children}
      <SyntaxHighlighter
        language={language}
        onLoaded={() => {
          setCodeViewLoaded(true);
        }}
      >
        {children}
      </SyntaxHighlighter>
    </code>
  );
}
