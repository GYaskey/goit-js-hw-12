import axios from 'axios';

export async function fetchImages(q, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '45001500-719c9808934d73fced765b961';
  const params = {
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  };

  try {
    const res = await axios.get(BASE_URL, { params });
    return res.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
}
