import { Link } from "../link";

export default function GistFailed() {
  return (
    <>
      <h2 className="text-3xl mt-6 mb-3 font-bold">Failed to load gist</h2>
      <p>Something went wrong.</p>
      <Link href="/" className="mt-4 inline-block">
        Go home
      </Link>
      .
    </>
  );
}
