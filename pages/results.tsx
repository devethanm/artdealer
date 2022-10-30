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
import { getMatchingSearches } from "../lib/mediawiki";

export async function getStaticProps() {
  /*
  const url: URL = new URL("https://query.wikidata.org/bigdata/namespace/wdq/sparql");
  const query: { [key: string]: string} = {'query': 'SELECT ?item ?itelLabel WHERE {?item wdt:P31 wd:Q146.} LIMIT 10', 'format': 'json'};
  for(const k in query) {url.searchParams.append(k, query[k])};
  const res = await fetch(url);
  const { results } = await res.json();
  */
  const url: URL = new URL("https://en.wikipedia.org/w/api.php");
  const query: { [key: string]: string} = {
      "action": "opensearch",
      "format": "json",
      "origin": "*",
      "search": "Paint",
      "namespace": "*",
      "limit": "10",
      "formatversion": "2"
  };
  for(const k in query) {url.searchParams.append(k, query[k])};
  const res = await fetch(url);
  //const { results } = await res.json();

  console.log("TESTTTTTTTT\n\n----------------")
  /*
  async function run() {
    console.log(await res.json());
  };
  run();
  */
  console.log("TESTTTTTTTT\n\n----------------")

  return {
    props: {
      paintings: await res.json(),
    },
  };
};

const Results: NextPage = ({ paintings }: any, { matches }: any,) => {
  const { query } = useRouter();
  let searchTerm: string;
  if ( typeof query.searchTerm === "string") {
    searchTerm = query.searchTerm;
  }
  else searchTerm = "error"

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
      <p>{searchTerm}</p>
      <p>{JSON.stringify(paintings)}</p>
      <p>{/*JSON.stringify(matches)*/}</p>
      <p>{/*JSON.stringify(getMatchingSearches(searchTerm))*/}</p>
      </div>
    </div>
  );
};

export default Results;