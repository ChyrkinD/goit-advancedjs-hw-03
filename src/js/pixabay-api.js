import axios from 'axios';

export async function fetchPhotosByQuery(searchedQuery) {
  const requestParams = new URLSearchParams({
    key: '50730122-93fdb989224721eaf9512ab49',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const response = await axios.get(`https://pixabay.com/api/?${requestParams}`);

  const data = response.data;
  return data.hits;
}
