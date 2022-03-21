import { Link } from "../link";

export default function UnsupportedGist() {
  return (
    <div>
      <h2>Unsupported gist</h2>
      <p>Gists without markdown files aren&apos;t supported.</p>
      <Link href="/">Go home</Link>.
    </div>
  );
}
