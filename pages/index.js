import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

import GistDocumentSkeleton from '../components/gist-document-skeleton';
import GistDocument from '../components/gist-document';
import Footer from '../components/footer';
import Logo from '../components/logo';
import constants from '../constants';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const gistUrl = `${constants.GITHUB_API_BASE_URL}/gists/${constants.GIST.HOME}`;
  const { data: gistData, error: gistError } = useSWR(gistUrl, fetcher);

  return (
    <div>
      <Head>
        <meta name="description" content={'View gists in a clean blog-like format.'} />
        <title>gistdoc</title>
        <link rel="preconnect" href="https://user-images.githubusercontent.com/" />
        <script defer data-domain="gistdoc.com" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <div className={'page-header'}>
        <Link href='/'>
          <a aria-label='gistdoc'>
            <Logo />
          </a>
        </Link>
        <ul className={'page-header-right'}>
          <li>
            <Link href={`/${constants.GIST.CHANGELOG}`}>
              <a>Changelog</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={'home-banner'}>
        <Logo />
      </div>
      {
        gistData ? (
          <GistDocument gistData={gistData} showMeta={false} />
        ) : (
          <GistDocumentSkeleton />
        )
      }
      <Footer/>
    </div>
  )
}
