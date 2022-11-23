// Next Components
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router"

// React Components
import { useRef } from "react";


// ../components
import Navbar from "../components/Navbar";

// Types
import type { NextPage } from "next";



const Home: NextPage = () => {
  const router = useRouter();
  const inputRef = useRef(null);

  const search = (e: any) => {
    // prevent page refresh upon event (button press)
    e.preventDefault();

    // var to store the searchTerm within inputRef.current.value
    let term: string = "";

    // make sure that ref isn't null
    if(inputRef.current != null) {
      term = inputRef.current['value'];
    }

    if(term == null || term == "") return;

    // push to results page with user search Term
    router.push(`/results?searchTerm=${term}`)
  }

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
        <p>Please enter search term:</p>
        <input 
          type="text" 
          required 
          className="text-black text-center mb-2"
          ref={inputRef}
          /*
          because this input is required, we may not need "target?.value" below
          as it should never be undefined
          onChange={({ target }) => setSearchTerm(target?.value)}
          */
        ></input>
        <button type="submit" onClick={search} id="searchButton" className="text-black border-r-slate-600 bg-slate-200">Search</button>
      </div>
    </div>
  );
};

export default Home;
