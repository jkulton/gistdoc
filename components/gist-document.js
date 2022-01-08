import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Comment from './comment';
import Link from 'next/link';

export default function GistDocument({ gistData, commentData }) {
  const files = gistData.files || [];
  const filename = Object.keys(files)
                         .find(x => x.endsWith('.md'));
  const { content } = (gistData.files && gistData.files[filename]) || {};

  return (
    <div className={'content'}>
      {
        content ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            >
            {content}
          </ReactMarkdown>
        ) : (
          <div>This gist is not supported. <Link href="/">Go home</Link>.</div>
        )
      }


{/*      { 
        commentData && commentData.length ?
        (
          <div>
            <h2>Comments</h2>
            <ul className={'comments'}>
              {commentData.map(comment => 
                <Comment
                  body={comment.body}
                  createdAt={comment.created_at}
                  username={comment.user.login}
                  avatarUrl={comment.user.avatar_url}
                />
              )}
            </ul>
            <div className={'comments-cta'}>
              <a href={gistData.html_url} target="_blank">
                Comment on Github
              </a>
            </div>
          </div>
        ) :
        commentData && !commentData.length ?
        null :
        <div>comments loading...</div>
      }*/}
    </div>
  );
}