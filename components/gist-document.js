import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Comment from './comment';
import Link from 'next/link';
import { findMarkdownFile } from '../lib/utility';

export default function GistDocument({ gistData, commentData }) {
  const files = gistData.files || {};
  const filenames = Object.keys(files);
  const markdownFile = findMarkdownFile(filenames);

  if (!markdownFile) {
    return <div>This gist is not supported. <Link href="/">Go home</Link>.</div>;
  }

  const { content } = gistData.files[markdownFile];

  return (
    <div className={'content'}>
      {
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
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