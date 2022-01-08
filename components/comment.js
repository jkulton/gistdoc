import localizedFormat from 'dayjs/plugin/localizedFormat';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import dayjs from 'dayjs';

export default function Comment({
  body,
  createdAt,
  username,
  avatarUrl
}) {
  dayjs.extend(localizedFormat)
  return (
    <li className={'comment'}>
      <div className={'comment-header'}>
        <img src={avatarUrl} />
        <span>{username}{' '}</span>
        <span>{dayjs(createdAt).format('lll')}</span>
      </div>
      <div className={'comment-body'}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
      </div>
    </li>
  )
}