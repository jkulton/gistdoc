import Image from "next/image";
import Link, { LinkProps } from "./link";

interface LinkWithAvatarProps extends LinkProps {
  avatarUrl: string;
  alt: string;
}

export default function LinkWithAvatar({
  avatarUrl,
  alt,
  href,
  children,
  variant = "subtle",
  ...rest
}: LinkWithAvatarProps) {
  return (
    <Link
      href={href}
      variant={variant}
      className="flex items-center text-gray-500"
      {...rest}
    >
      <img
        src={avatarUrl}
        alt={alt}
        width={28}
        height={28}
        className="rounded-full mr-2"
      />
      {children}
    </Link>
  );
}
