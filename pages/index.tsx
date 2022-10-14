// Next Components
import Head from "next/head";
import Link from "next/link";

// ../components
import Navbar from "../components/Navbar";

// Types
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-slate-900">
      <Head>
        <title>artdealer</title>
      </Head>
      {/*Place a navigation bar at the top of the screen*/}
      <Navbar></Navbar>

      {/* Welcome text */}
      <div className="justify-center text-center flex">
        <h1 className="text-2xl font-bold text-green-700">welcome to&nbsp;</h1>
        <h1 className="text-center text-2xl font-bold text-red-400 ">art</h1>
        <h1 className="text-center text-2xl font-bold text-slate-400 ">
          dealer
        </h1>
      </div>

      {/* Form */}
      <div className="justify-center text-white text-center">
        <form action="/results/" method="get">
          <p>Please enter search term:</p>
          <input type="text" required id="searchTerm" name="searchTerm" className="text-black text-center mb-2"></input>
          <button type="submit" id="searchButton" className="text-black border-r-slate-600 bg-slate-200">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
