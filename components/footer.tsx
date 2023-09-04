import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <div className="mx-4 my-10 flex items-center justify-center">
      <Link href="/" aria-label="Gistdoc" className="h-8 w-8">
        <Logo />
      </Link>
    </div>
  );
}
