export async function getMatchingSearches(searchTerm: string) {
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
    console.log(res.url);
    console.log(res.status);
    return res.json();
}