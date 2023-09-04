import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

export type LinkProps = {
  variant?: "subtle" | "button" | "unstyled";
} & NextLinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const variantClasses = {
  normal: "text-sky-600 no-underline hover:underline",
  subtle: "text-gray-400",
  button:
    "rounded-md px-3 py-2 text-sky-600 hover:bg-blue-100 dark:hover:bg-blue-900 dark:hover:text-sky-300/90",
  unstyled: "",
};

export default function Link({
  href,
  variant = "unstyled",
  className,
  ...props
}: React.PropsWithChildren<LinkProps>) {
  const baseClasses = variantClasses[variant] ?? variantClasses.normal;

  return (
    <NextLink
      href={href}
      {...props}
      className={`${baseClasses}${className ? ` ${className}` : ""}`}
    />
  );
}
