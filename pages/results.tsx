// Next Components
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps } from 'next'

// ../components
import Navbar from "../components/Navbar";

// Types
import type { NextPage } from "next";
import type { InferGetStaticPropsType } from "next";

// lib
import { getMatchingSearches } from "../lib/wikidata";

export async function getServerSideProps(context: any) {
  return {
    props: {
      paintings: await getMatchingSearches(context.query.searchTerm)
    },
  };
};

const Results: NextPage = ({ paintings }: any, { matches }: any,) => {

  return (
    <div className="h-screen bg-slate-900">
      <Head>
        <title>artdealer</title>
      </Head>
      {/*Place navigation bar at the top of the screen*/}
      <Navbar></Navbar>
      {/* Header text */}
      <div className="justify-center text-white text-center">
      <p>Search results:</p>
      <p>{JSON.stringify(paintings)}</p>
      <p>{/*JSON.stringify(matches)*/}</p>
      <p>{/*JSON.stringify(getMatchingSearches(searchTerm))*/}</p>
      </div>
    </div>
  );
};

export default Results;