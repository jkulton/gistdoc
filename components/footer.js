import Link from 'next/link';

export default function Footer({ url = '/' }) {
  return (
    <div className={'footer'}>
      <Link href={url}>gistdoc</Link>
    </div>
  );
}