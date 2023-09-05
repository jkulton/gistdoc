import Markdown from "../markdown";
import GistMeta from "./gist-meta";
import { Gist, GithubComment } from "../../types/github";
import UnsupportedGist from "./unsupported-gist";
import { Comments } from "../comments";
import { findMarkdownFile } from "../../lib/utility";

interface GistDocumentPrpos {
  gistData?: Gist;
  commentData?: GithubComment[];
  showMeta?: boolean;
  showComments?: boolean;
}

export default function GistDocument({
  gistData,
  commentData,
  showMeta = true,
  showComments = true,
}: GistDocumentPrpos) {
  const files = gistData?.files || {};
  const filenames = Object.keys(files);
  const markdownFile = findMarkdownFile(filenames);

  if (!markdownFile || !gistData) return <UnsupportedGist />;

  const { content } = files[markdownFile];

  return (
    <div className="mt-10 flex flex-col">
      <Markdown document={content} className="mb-10" />
      {showMeta ? (
        <GistMeta
          author={gistData.owner}
          updatedAt={gistData.updated_at}
          gistUrl={gistData.html_url}
        />
      ) : null}
      {showComments ? (
        <Comments commentData={commentData} gistUrl={gistData.html_url} />
      ) : null}
    </div>
  );
}
