export async function fetchPhotosByQuery(searchedQuery) {
  const requestParams = new URLSearchParams({
    key: '50730122-93fdb989224721eaf9512ab49',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const response = await fetch(`https://pixabay.com/api/?${requestParams}`);
  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();
  return data.hits;
}
