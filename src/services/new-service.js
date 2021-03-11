const apiUrl = 'https://newsapi.org/v2/top-headlines';
const queryParam = {
  country: 'us',
  category: 'Business',
  q: '',
  pageSize: 10,
  apiKey: '5c272dc78f954b94855e059b7e2dabc2'
};

export function getArticles() {
  return fetch(`${apiUrl}?country=${queryParam.country}&category=${queryParam.category}&q=${queryParam.q}&apiKey=${queryParam.apiKey}&pageSize=${queryParam.pageSize}`).then(response =>
    response.json()
  ).then(data => data.articles);
}

export function setQueryParams(params) {
  Object.assign(queryParam, params)
}

export function getDefaultLan(){
  return queryParam.country;
}

export function getDefaultCate(){
  return queryParam.category;
}