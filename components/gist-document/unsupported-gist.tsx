import { Link } from "../link";

export default function UnsupportedGist() {
  return (
    <>
      <h2 className="text-3xl mt-6 mb-3 font-bold">Unsupported gist</h2>
      <p>Gists without markdown files aren&apos;t supported.</p>
      <Link href="/" className="mt-4 inline-block">
        Go home
      </Link>
      .
    </>
  );
}
