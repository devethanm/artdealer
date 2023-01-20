// Next Components
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps } from 'next'

// ../components
import Navbar from "../components/Navbar";
import Artwork from "../components/Artwork";

// Types
import type { NextPage } from "next";
import type { InferGetStaticPropsType } from "next";
import type { Paintings, PaintingsClass } from "../lib/paintingsjson";

// lib
import { getMatchingSearches, getPaintings, parsePaintings } from "../lib/wikidata";
import { Convert } from "../lib/paintingsjson"
import { json } from "stream/consumers";

export async function getServerSideProps(context: any) {
  return {
    props: {
      paintings: await getPaintings(context.query.searchTerm)
    },
  };
};

const Results: NextPage<{paintings: Paintings}> = ({ paintings }) => {
  let valid = true;
  const validateJSON = (json: string) => {
    try {
      Convert.toPaintings(JSON.stringify(paintings));
    } catch (error) {
      valid = false;
    }
  }

  const paintingsClass: PaintingsClass = JSON.parse(JSON.stringify(paintings))
  // an interface can be made for this instead of any 
  const paintingsData: any = parsePaintings(paintingsClass);

  return (
    <div className="h-screen bg-slate-900">
      <Head>
        <title>polyptych</title>
      </Head>
      {/*Place navigation bar at the top of the screen*/}
      <Navbar></Navbar>
      {/* Header text */}
      <div className="justify-center text-white text-center">
        <p>Search results:</p>
        <p>{/* valid ? JSON.stringify(paintings): "error"*/}</p>
        {paintingsData['results'].map((e: any) => {
          return (
            <Artwork
              image={e['image']}
              footer1={e['value']}
              footer2={e['label']}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Results;