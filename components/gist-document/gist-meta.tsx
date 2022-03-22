import dayjs from "../../lib/dayjs";
import { GithubUser } from "../../types/github";
import { LinkWithAvatar, Link } from "../link";

interface GistMetaProps {
  author: GithubUser;
  updatedAt: string;
  gistUrl: string;
}

export default function GistMeta({
  author,
  updatedAt,
  gistUrl,
}: GistMetaProps) {
  const { login, avatar_url, html_url } = author;

  return (
    <div className="flex items-center justify-between text-sm my-4 pt-3 border-t-gray-100 dark:border-t-gray-700 border-t-2">
      <LinkWithAvatar href={html_url} avatarUrl={avatar_url} alt={`@${login}`}>
        {login}
      </LinkWithAvatar>
      <Link href={gistUrl} variant="subtle">
        {dayjs(updatedAt).format("MMM D, YYYY")}
      </Link>
    </div>
  );
}
