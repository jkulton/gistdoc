import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

import GistDocumentSkeleton from '../components/gist-document-skeleton';
import GistDocument from '../components/gist-document';
import Footer from '../components/footer';
import Logo from '../components/logo';
import constants from '../constants';
import { fetcher } from '../lib/utility';

export default function Home() {
  const gistUrl = `${constants.GITHUB_API_BASE_URL}/gists/${constants.GIST.HOME}`;
  const { data: gistData, error: gistError } = useSWR(gistUrl, fetcher);

  return (
    <div className={'home'}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gistdoc</title>
        <link rel="preconnect" href="https://user-images.githubusercontent.com/" />
        <script defer data-domain="gistdoc.com" src="https://plausible.io/js/plausible.js"></script>

        <meta name="title" content="Gistdoc" />
        <meta name="description" content="Quickly view GitHub markdown gists as simple blog-style pages" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gistdoc.com/" />
        <meta property="og:title" content="Gistdoc" />
        <meta property="og:description" content="Quickly view GitHub markdown gists as simple blog-style pages" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gistdoc.com/" />
        <meta property="twitter:title" content="Gistdoc" />
        <meta property="twitter:description" content="Quickly view GitHub markdown gists as simple blog-style pages" />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
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
