import Link from 'next/link';
import Logo from './logo';

export default function Footer({ url = '/' }) {
  return (
    <div className={'footer'}>
      <Link href={url}>
        <a aria-label='gistdoc'>
          <Logo />
        </a>
      </Link>
    </div>
  );
}