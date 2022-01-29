import relativeTime from 'dayjs/plugin/relativeTime';
import { findMarkdownFile } from '../lib/utility';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);

function GistMeta({ author, updatedAt, gistURL }) {
  const { login, avatar_url, html_url } = author;

  return (
    <div className={'gist-meta'}>
      <Link href={html_url}>
        <a className={'gist-meta-author'}>
          <img src={avatar_url} alt="author's avatar" />{login}
        </a>
      </Link>

      <Link href={gistURL}>
        <a className={'gist-meta-date'}>
          {dayjs(updatedAt).format('MMM D, YYYY')}
        </a>
      </Link>
    </div>
  );
}

function UnsupportedGist() {
  return (
    <div className={'content'}>
      <div className={'gist-failed'}>
        <h2>Unsupported gist</h2>

        <p>Gists without markdown files aren&apos;t supported.</p>

        <Link href="/">
          <a>Go home</a>
        </Link>.
      </div>
    </div>
  );
}

function Comment({ body, createdAt, username, avatarURL, authorURL, commentURL }) {
  return (
    <div className={'comment'}>
      <div className={'comment-header'}>
        <img src={avatarURL} alt="author's avatar" />
        <a className={'comment-author'} href={authorURL}>{username}</a>
      </div>
      <div className={'comment-body'}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
      </div>
      <a className={'comment-date'} href={commentURL} title={dayjs(createdAt).format('MMM D, YYYY h:mmA')}>{dayjs(createdAt).fromNow()}</a>
    </div>
  )
}

function GistComments({ gistData, commentData }) {
  return (
    <div className={'comments'}>
      {
        commentData && <h2>Comments ({commentData.length})</h2>
      }
      {
        commentData && (
          <ul className={'comments-list'}>
            {commentData.map(comment => 
              <Comment
                key={comment.id}
                body={comment.body}
                createdAt={comment.created_at}
                username={comment.user.login}
                avatarURL={comment.user.avatar_url}
                authorURL={comment.user.html_url}
                // This is an undocumented way to link directly to a gist comment
                commentURL={`${gistData.html_url}#gistcomment-${comment.id}`}
              />
            )}
          </ul>
        )
      }
      <div className={'comments-cta'}>
        <a href={gistData.html_url} target="_blank">
          Comment on Github
        </a>
      </div>
    </div>
  );
}

export default function GistDocument({
  gistData,
  commentData,
  showMeta = true,
  showComments = true
}) {
  const files = gistData.files || {};
  const filenames = Object.keys(files);
  const markdownFile = findMarkdownFile(filenames);

  if (!markdownFile) return <UnsupportedGist />;

  const { content } = gistData.files[markdownFile];

  return (
    <div className={'content'}>
      <div className={'content-markdown'}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
      {
        showMeta &&  <GistMeta
                        author={gistData.owner}
                        updatedAt={gistData.updated_at}
                        gistURL={gistData.html_url}
                      />
      }
      {
        showComments && <GistComments
                          commentData={commentData}
                          gistData={gistData}
                        />
      }
    </div>
  );
}