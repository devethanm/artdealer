import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-slate-900">
      <Head>
        <title>artdealer</title>
      </Head>
      { /*Place a navigation bar at the top of the screen*/ }
      <Navbar></Navbar>
      <div className="justify-center text-center flex">
        <h1 className="text-2xl font-bold text-green-700">
          welcome to&nbsp;
        </h1>
        <h1 className="text-center text-2xl font-bold text-red-400 ">
          art
        </h1>
        <h1 className="text-center text-2xl font-bold text-slate-400 ">
          dealer
        </h1>
      </div>
    </div>
  );
};

export default Home;
