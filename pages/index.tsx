import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-slate-900">
      <Head>
        <title>artdealer</title>
      </Head>
      <Navbar></Navbar>
      <div className="justify-center flex">
        <h1 className="inline text-2xl font-bold text-green-700 mr-2">
          Welcome to
        </h1>
        <h1 className="text-center text-2xl font-bold text-red-400  inline">
          art
        </h1>
        <h1 className="text-center text-2xl font-bold text-slate-400 inline">
          dealer
        </h1>
      </div>
    </div>
  );
};

export default Home;
