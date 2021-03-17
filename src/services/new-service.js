
export function getNewsApi(queryParam) {
  const apiUrl = 'https://newsapi.org/v2/top-headlines';
  return `${apiUrl}?country=${queryParam.country}&category=${queryParam.category}&q=${queryParam.q}&apiKey=${queryParam.apiKey}&pageSize=${queryParam.pageSize}`
}

export function getCateList() {
  return ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];
}

export function getLanguageList() {
  return [
    { code: 'cn', name: 'China' },
    { code: 'jp', name: 'Japan' },
    { code: 'us', name: 'United States' },
  ]
}