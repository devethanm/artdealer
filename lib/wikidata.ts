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
