import Head from "next/head";
import useSWR from "swr";

import {
  GistDocument,
  GistDocumentSkeleton,
} from "../components/gist-document";

import Footer from "../components/footer";
import Logo from "../components/logo";
import constants from "../constants";
import { fetcher } from "../lib/utility";
import Header from "../components/header";

export default function Home() {
  const gistUrl = `${constants.GITHUB_API_BASE_URL}/gists/${constants.GIST.HOME}`;
  const { data: gistData, error: gistError } = useSWR(gistUrl, fetcher);

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gistdoc</title>
        <link
          rel="preconnect"
          href="https://user-images.githubusercontent.com/"
        />

        <meta name="title" content="Gistdoc" />
        <meta
          name="description"
          content="Quickly view GitHub markdown gists as simple blog-style pages"
        />
        <meta name="theme-color" content="#0d1117" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gistdoc.com/" />
        <meta property="og:title" content="Gistdoc" />
        <meta
          property="og:description"
          content="Quickly view GitHub markdown gists as simple blog-style pages"
        />
        <meta
          property="og:image"
          content="https://gistdoc.com/banner-min.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gistdoc.com/" />
        <meta property="twitter:title" content="Gistdoc" />
        <meta
          property="twitter:description"
          content="Quickly view GitHub markdown gists as simple blog-style pages"
        />
        <meta
          property="twitter:image"
          content="https://gistdoc.com/banner-min.png"
        />
      </Head>
      <Header />
      <Logo className="w-[110px] h-[110px] mx-auto" />
      <div className="mx-auto mt-6 max-w-[722px] mb-5 px-5">
        {gistData ? (
          <GistDocument
            gistData={gistData}
            showMeta={false}
            showComments={false}
          />
        ) : (
          <GistDocumentSkeleton />
        )}
      </div>
      <Footer />
    </div>
  );
}
