import dayjs from "../../lib/dayjs";
import { GithubComment } from "../../types/github";
import { Link, LinkWithAvatar } from "../link";
import Markdown from "../markdown/Markdown";

interface CommentProps {
  body: string;
  createdAt: string;
  username: string;
  avatarURL: string;
  authorURL: string;
  commentURL: string;
}

export default function Comment({
  body,
  createdAt,
  username,
  avatarURL,
  authorURL,
  commentURL,
}: CommentProps) {
  return (
    <div className="pb-7 border-b-gray-100 dark:border-b-gray-700 border-b-2">
      <LinkWithAvatar
        href={authorURL}
        avatarUrl={avatarURL}
        alt={`@${username}`}
      >
        {username}
      </LinkWithAvatar>
      <div className="my-3">
        <Markdown document={body} />
      </div>
      <Link
        variant="subtle"
        href={commentURL}
        title={dayjs(createdAt).format("MMM D, YYYY h:mmA")}
      >
        {dayjs(createdAt).fromNow()}
      </Link>
    </div>
  );
}
