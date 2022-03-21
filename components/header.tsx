import constants from "../constants";
import { Link } from "./link";
import Logo from "./logo";

interface HeaderProps {
  variant?: "minimal";
}

export default function Header({ variant }: HeaderProps) {
  return (
    <header>
      <nav>
        <ol className="p-4 flex items-center gap-4 pr-4">
          <li className="flex-1">
            <Link
              href="/"
              aria-label="gistdoc"
              className="h-8 w-8 inline-block"
            >
              <Logo />
            </Link>
          </li>
          {variant !== "minimal" ? (
            <>
              <li>
                <Link href={`/${constants.GIST.CHANGELOG}`} variant="button">
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href={"https://github.com/jkulton/gistdoc"}
                  variant="button"
                >
                  GitHub
                </Link>
              </li>
            </>
          ) : null}
        </ol>
      </nav>
    </header>
  );
}
