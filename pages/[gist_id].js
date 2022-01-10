import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

import GistDocumentSkeleton from '../components/gist-document-skeleton';
import GistDocument from '../components/gist-document';
import Footer from '../components/footer';
import Logo from '../components/logo';
import constants from '../constants';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Page() {
  const router = useRouter();
  const { gist_id } = router.query;
  const gistUrl = `${constants.GITHUB_API_BASE_URL}/gists/${gist_id}`;
  // const gistCommentsUrl = `${constants.GITHUB_API_BASE_URL}/gists/${gist_id}/comments`;

  const { data: gistData, error: gistError } = useSWR(gist_id ? gistUrl : null, fetcher);

  console.log({ gistData });

  // const {
  //   data: commentData,
  //   error: commentError
  // } = useSWR(gistData ? gistCommentsUrl : null, fetcher);

  if (gistError) return <div>failed to load gist</div>;
  if (!gistData) return <GistDocumentSkeleton/>;

  return (
    <div>
      <Head>
        <meta name="description" content={gistData.description} />
        <title>gistdoc - {gistData.description}</title>
        <link rel="preconnect" href="https://user-images.githubusercontent.com/" />
        (
          gistData?.public && gistData.public === true ?
          null :
          <meta name="robots" content="noindex"/>
        )
      </Head>
      <div className={'page-header'}>
        <Link href='/'>
          <a aria-label='gistdoc'><Logo /></a>
        </Link>
      </div>
      <GistDocument
        gistData={gistData}
      />
      <Footer/>
    </div>
  );
}

export default Page;