import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Comment from './comment';
import Link from 'next/link';
import { findMarkdownFile } from '../lib/utility';
import Image from 'next/image';
import dayjs from 'dayjs';

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

export default function GistDocument({ gistData, commentData, showMeta = true }) {
  const files = gistData.files || {};
  const filenames = Object.keys(files);
  const markdownFile = findMarkdownFile(filenames);

  if (!markdownFile) {
    return <div>This gist is not supported. <Link href="/">Go home</Link>.</div>;
  }

  const { content } = gistData.files[markdownFile];

  return (
    <div className={'content'}>
      <div className={'content-markdown'}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
      {
        showMeta ? (
          <GistMeta
            author={gistData.owner}
            updatedAt={gistData.updated_at}
            gistURL={gistData.html_url}
          />
        ) : null
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