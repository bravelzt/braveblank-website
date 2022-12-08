import Head from "next/head";
import DirectTelegram from "../components/DirectTelegram";
import Masthead from "../components/Masthead";

export default function Home() {
  const title = "Brave - Разработка. Быстро. Дорого.";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Brave - Разрабатываем всё. Быстро. Дорого."
        />
        <link rel="canonical" href="https://bravestd.com" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://bravestd.com" />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Примерное время для чтения" />
        <meta name="twitter:data1" content="1 минута" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <DirectTelegram />
    </div>
  );
}
