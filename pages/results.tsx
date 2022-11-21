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
import { getMatchingSearches, getPaintings } from "../lib/wikidata";
import { Convert, Paintings } from "../lib/paintingsjson"

export async function getServerSideProps(context: any) {
  return {
    props: {
      paintings: await getPaintings(context.query.searchTerm)
    },
  };
};

const Results: NextPage = ({ paintings }: any, { matches }: any,) => {
  let valid = true;
  const validateJSON = (json: string) => {
    try {
      Convert.toPaintings(paintings);
    } catch (error) {
      valid = false;
    }
  }

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
      <p>{valid ? JSON.stringify(paintings): "error"}</p>
      </div>
    </div>
  );
};

export default Results;