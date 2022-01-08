import { useRouter } from 'next/router';
import useSWR from 'swr';
import Head from 'next/head';

import GistDocumentSkeleton from '../../components/gist-document-skeleton';
import GistDocument from '../../components/gist-document';
import Footer from '../../components/footer';
import Logo from '../../components/logo';
import constants from '../../constants';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Page() {
  const router = useRouter();
  const { gist_id } = router.query
  const gistUrl = `${constants.GITHUB_API_BASE_URL}/gists/${gist_id}`;
  const gistCommentsUrl = `${constants.GITHUB_API_BASE_URL}/gists/${gist_id}/comments`;

  const {
    data: gistData,
    error: gistError
  } = useSWR(gist_id ? gistUrl : null, fetcher);


  const {
    data: commentData,
    error: commentError
  } = useSWR(gistData ? gistCommentsUrl : null, fetcher);

  if (gistError) return <div>failed to load</div>;
  if (!gistData) return <GistDocumentSkeleton/>;

  return (
    <div>
      <Head>
        <meta name="description" content={gistData.description} />
        <title>gistdoc - {gistData.description}</title>
        <link rel="preconnect" href="https://user-images.githubusercontent.com/" />
      </Head>
      <div className={'page-header'}>
        <a href="/">
          <Logo />
        </a>
      </div>
      <GistDocument
        gistData={gistData}
        commentData={commentData}
      />
      <Footer/>
    </div>
  );
}

export default Page;