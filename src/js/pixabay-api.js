import axios from 'axios';

export async function fetchImages(q) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '45001500-719c9808934d73fced765b961';
  const params = {
    key: API_KEY, //!  Як передати ключ через хедер (зараз його видно в запитах)
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 20,
  };

  try {
    const res = await axios.get(BASE_URL, { params }); //! Працює і без await? response в будь якому разі - обєкт
    return res.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
}
