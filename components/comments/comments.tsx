import { Gist, GithubComment } from "../../types/github";
import Comment from "./comment";

interface GistCommentsProps {
  gistUrl: string;
  commentData?: GithubComment[];
}

export default function GistComments({
  gistUrl,
  commentData,
}: GistCommentsProps) {
  return (
    <div className="mt-14">
      {commentData ? (
        <>
          <h2 className="text-2xl">Comments ({commentData.length})</h2>
          <ul className="mt-4 flex flex-col gap-7">
            {commentData.map((comment) => (
              <Comment
                key={comment.id}
                body={comment.body}
                createdAt={comment.created_at}
                username={comment.user.login}
                avatarURL={comment.user.avatar_url}
                authorURL={comment.user.html_url}
                // This is an undocumented way to link directly to a gist comment
                commentURL={`${gistUrl}#gistcomment-${comment.id}`}
              />
            ))}
          </ul>
        </>
      ) : null}
      <div className="mt-10">
        <a
          href={gistUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-gray-100 dark:bg-gray-500 text-gray-500 dark:text-gray-100 block p-4 text-center rounded-full"
        >
          Comment on Github
        </a>
      </div>
    </div>
  );
}
