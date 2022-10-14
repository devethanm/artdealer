// Next Components
import Head from "next/head";
import Link from "next/link";

// ../components
import Navbar from "../components/Navbar";

// Types
import type { NextPage } from "next";

const Results: NextPage = () => {
  return (
    <div className="h-screen bg-slate-900">
      <Head>
        <title>artdealer</title>
      </Head>
      {/*Place a navigation bar at the top of the screen*/}
      <Navbar></Navbar>

      {/* Header text */}
      <div className="justify-center text-white text-center">
        <p>Search results:</p>
      </div>
      <p></p>
    </div>
  );
};

export default Results;