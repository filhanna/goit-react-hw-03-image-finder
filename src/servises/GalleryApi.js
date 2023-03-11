import axios from 'axios';

export async function getImages(value, page) {
  try {
    const responce = await axios.get(
      `https://pixabay.com/api/?q=${value}&page=${page}&key=33186908-5568035f3500eb61b1a0cd212&image_type=photo&orientation=horizontal&per_page=12`
    );
    return responce.data.hits;
  } catch (error) {
    console.log('error:', error);
  }
}
