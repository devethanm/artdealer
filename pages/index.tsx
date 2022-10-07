import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-slate-500">
      <Head>
        <title>artdealer</title>
      </Head>
      <body>
        <h1 className="text-center text-2xl font-bold text-teal-400">Hello World</h1>
      </body>
    </div>
  );
};

export default Home;
