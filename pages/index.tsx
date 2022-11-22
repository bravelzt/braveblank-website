import Head from "next/head";
import Masthead from "../components/Masthead";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brave Studio</title>
        <meta name="description" content="Created by @bravelzt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
    </div>
  );
}
