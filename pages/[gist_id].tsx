import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";

import {
  GistDocument,
  GistDocumentSkeleton,
} from "../components/gist-document";
import Footer from "../components/footer";
import constants from "../constants";
import { fetcher } from "../lib/utility";
import Header from "../components/header";
import GistFailed from "../components/gist-document/gist-failed";

function Page() {
  const router = useRouter();
  const { gist_id } = router.query;
  const gistUrl = `${constants.GITHUB_API_BASE_URL}/gists/${gist_id}`;
  const gistCommentsUrl = `${constants.GITHUB_API_BASE_URL}/gists/${gist_id}/comments`;

  const { data: gistData, error: gistError } = useSWR(
    gist_id ? gistUrl : null,
    fetcher
  );
  const { data: commentData, error: commentError } = useSWR(
    gistData && gistData.comments > 0 ? gistCommentsUrl : null,
    fetcher
  );

  const title = gistData ? `${gistData.description} | Gistdoc` : "Gistdoc";
  const description = gistData ? gistData.description : "Gistdoc";

  return (
    <div className="flex flex-col">
      <Head>
        <link
          rel="preconnect"
          href="https://user-images.githubusercontent.com/"
        />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d1117" />
        {gistData?.public === false && <meta name="robots" content="noindex" />}
      </Head>
      <Header variant="minimal" />
      <div className="mx-auto mt-6 w-[722px] mb-5">
        {
          // Error
          gistError ? (
            <GistFailed />
          ) : gistData ? (
            // Gist
            <GistDocument gistData={gistData} commentData={commentData} />
          ) : (
            // Loading
            <GistDocumentSkeleton />
          )
        }
      </div>
      <Footer />
    </div>
  );
}

export default Page;
