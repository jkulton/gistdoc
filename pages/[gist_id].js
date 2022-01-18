import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

import GistDocumentSkeleton from '../components/gist-document-skeleton';
import GistDocument from '../components/gist-document';
import Footer from '../components/footer';
import Logo from '../components/logo';
import constants from '../constants';
import { fetcher } from '../lib/utility';

function FailedToLoadGist() {
  return (
    <div className={'content'}>
      <div className={'gist-failed'}>
        <h2>Failed to load gist</h2>

        <p>Something went wrong.</p>

        <Link href="/">
          <a>Go home</a>
        </Link>.
      </div>
    </div>
  );
}

function Page() {
  const router = useRouter();
  const { gist_id } = router.query;
  const gistUrl = `${constants.GITHUB_API_BASE_URL}/gists/${gist_id}`;
  // const gistCommentsUrl = `${constants.GITHUB_API_BASE_URL}/gists/${gist_id}/comments`;

  const { data: gistData, error: gistError } = useSWR(gist_id ? gistUrl : null, fetcher);
  // const { data: commentData, error: commentError } = useSWR(gistData ? gistCommentsUrl : null, fetcher);

  const title = gistData ? `${gistData.description} | Gistdoc` : "Gistdoc";
  const description = gistData ? gistData.description : "Gistdoc"; 

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://user-images.githubusercontent.com/" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer data-domain="gistdoc.com" src="https://plausible.io/js/plausible.js"></script>
        {
          gistData?.public === false && <meta name="robots" content="noindex"/>
        }
      </Head>
      <div className={'page-header'}>
        <Link href='/'>
          <a aria-label='Gistdoc'><Logo /></a>
        </Link>
      </div>
      <div className={'gist-view'}>
        {
          // Error
          gistError ? (
            <FailedToLoadGist />
          ) : !gistData ? (
          // Loading
            <GistDocumentSkeleton/>
          ) : (
          // Gist
            <GistDocument gistData={gistData} />
          )
        }
      </div>
      <Footer/>
    </div>
  );
}

export default Page;