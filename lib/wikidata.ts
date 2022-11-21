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

export async function getPaintings(targetEntity: string) {
  const url: URL = new URL("https://query.wikidata.org/bigdata/namespace/wdq/sparql");
  const urlquery: { [key: string]: string } = {
    format: "json",
    // ( cat test query ) query: "SELECT ?item ?itemLabel WHERE { ?item wdt:P31 wd:Q146. } LIMIT 10",
    query: `SELECT ?item ?itemLabel ?object ?objectLabel ?image WHERE {?item wdt:P31/wdt:P279* wd:Q3305213 . ?item wdt:P180 wd:${targetEntity} . ?item wdt:P18 ?image . SERVICE wikibase:label { bd:serviceParam wikibase:language "en" } }`,
  };
  for (const k in urlquery) {
    url.searchParams.append(k, urlquery[k]);
  }
  const res = await fetch(url);

  return { paintings: await res.json() };
}

