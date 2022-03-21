import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "normal" | "subtle";
}

export default function Link({
  href,
  variant = "normal",
  ...props
}: React.PropsWithChildren<LinkProps>) {
  const color =
    variant === "normal" ? "text-blue-600" : "text-gray-400 font-light";
  return (
    <NextLink href={href}>
      <a {...props} className={`${color} ${props.className}`} />
    </NextLink>
  );
}
