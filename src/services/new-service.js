
export function getArticles(queryParam) {
  const apiUrl = 'https://newsapi.org/v2/top-headlines';
  return fetch(`${apiUrl}?country=${queryParam.country}&category=${queryParam.category}&q=${queryParam.q}&apiKey=${queryParam.apiKey}&pageSize=${queryParam.pageSize}`).then(response =>
    response.json()
  ).then(data => data.articles);
}
