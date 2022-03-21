import { Link } from "./link";
import Logo from "./logo";

export default function Header() {
  return (
    <div className="p-4 flex items-center">
      <Link href="/" aria-label="Gistdoc" className="h-8 w-8">
        <Logo />
      </Link>
    </div>
  );
}
