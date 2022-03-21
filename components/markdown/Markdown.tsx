import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "../link";

interface MarkdownProps {
  document: string;
  className?: string;
}

const proseClasses = [
  "prose",
  "dark:prose-invert",
  "max-w-full",
  "prose-h1:text-center",
  "prose-hr:border-t-2",
  "prose-hr:border-t-gray-100",
  "dark:prose-hr:border-t-gray-700",
  "prose-hr:mb-1",
  "prose-tr:border-0",
  "even:prose-tr:bg-gray-200",
  "dark:even:prose-tr:bg-gray-500",
  "prose-td:p-2",
  "prose-th:p-2",
  "prose-a:text-sky-600",
].join(" ");

export default function Markdown({ document, className }: MarkdownProps) {
  return (
    <ReactMarkdown
      className={`${proseClasses}${className ? ` ${className}` : ""}`}
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ node, ...props }) => {
          if (props.role === "doc-backlink") {
            return (
              <Link {...props} className="ml-1">
                ^
              </Link>
            );
          }

          return <Link {...props} />;
        },
      }}
    >
      {document}
    </ReactMarkdown>
  );
}
