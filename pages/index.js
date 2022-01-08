import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr';

import GistDocumentSkeleton from '../components/gist-document-skeleton';
import GistDocument from '../components/gist-document';
import Footer from '../components/footer';
import Logo from '../components/logo';
import constants from '../constants';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const gistUrl = `${constants.GITHUB_API_BASE_URL}/gists/${constants.HOMEPAGE_GIST_ID}`;

  const {
    data: gistData,
    error: gistError
  } = useSWR(gistUrl, fetcher);

  if (!gistData) return <GistDocumentSkeleton/>;

  return (
    <div>
      <Head>
        <meta name="description" content={gistData.description} />
        <title>gistdoc - {gistData.description}</title>
        <link rel="preconnect" href="https://user-images.githubusercontent.com/" />
      </Head>
      <div className={'page-header'}>
        <a href="/" aria-label="gistdoc">
          <Logo />
        </a>
      </div>
      <GistDocument gistData={gistData} />
      <Footer/>
    </div>
  )
}
