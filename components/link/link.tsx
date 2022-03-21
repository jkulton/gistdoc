import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "subtle" | "button" | "unstyled";
}

const variantClasses = {
  normal: "text-sky-600 no-underline hover:underline",
  subtle: "text-gray-400",
  button:
    "rounded-md px-3 py-2 text-sky-600 hover:bg-blue-100 dark:hover:bg-blue-900 dark:hover:text-sky-300/90",
  unstyled: "",
};

export default function Link({
  href,
  variant,
  className,
  ...props
}: React.PropsWithChildren<LinkProps>) {
  const baseClasses = variantClasses[variant] ?? variantClasses.normal;

  return (
    <NextLink href={href}>
      <a {...props} className={`${baseClasses} ${className}`} />
    </NextLink>
  );
}
