// types
import { PaintingsClass } from "./paintingsjson";

// Function to populate responsive searchbar on index page
export async function getMatchingSearches(searchTerm: string) {
  const url: URL = new URL("https://www.wikidata.org/w/api.php");
  const urlquery: { [key: string]: string } = {
    action: "wbsearchentities",
    format: "json",
    search: searchTerm,
    limit: "10",
    language: "en",
    formatversion: "2",
  };
  for (const k in urlquery) {
    url.searchParams.append(k, urlquery[k]);
  }
  const res = await fetch(url);

  return { paintings: await res.json() };
}

// function to get paintings from user search 
export async function getPaintings(targetEntity: string) {
  const url: URL = new URL("https://query.wikidata.org/bigdata/namespace/wdq/sparql");
  const urlquery: { [key: string]: string } = {
    format: "json",
    // ( cat test query ) query: "SELECT ?item ?itemLabel WHERE { ?item wdt:P31 wd:Q146. } LIMIT 10",
    // TODO: if their object has children such as a query for paintings depicting
    // "woodwind instruments" run two queries one like the query below and one like 
    // paintings depicting woodwind instruments and compare the result sets
    // and display the bigger result set
    query: `SELECT ?item ?itemLabel ?object ?objectLabel ?image WHERE {?item wdt:P31/wdt:P279* wd:Q3305213 . ?item wdt:P180 wd:${targetEntity} . ?item wdt:P18 ?image . SERVICE wikibase:label { bd:serviceParam wikibase:language "en" } } LIMIT 10`,
  };
  for (const k in urlquery) {
    url.searchParams.append(k, urlquery[k]);
  }
  const res = await fetch(url);

  return { paintings: await res.json() };
}

// function to parse json data returned from wikidata api
// TODO: specify return type of json object or string array or something idk
// TODO: Should functions end with semicolons or just components or whats going on?
export function parsePaintings(data: PaintingsClass) {
  const stringifiedData = JSON.stringify(data)
  const parsedData = JSON.parse(stringifiedData)

  const bindings = parsedData['paintings']['results']['bindings']
  
  // declare return values:
  // look into destructuring syntax for this it could be useful
  // type this as object array?
  let results: any = [];
  bindings.forEach((element: any) => {
    const image = element['image']['value'];
    const value = element['item']['value'];
    const label = element['itemLabel']['value'];
    results.push({
      image: image,
      value: value,
      label: label,
    })
  });

  return {
    // create a new interface for paintingsData perhaps
    results: results,
  };
}