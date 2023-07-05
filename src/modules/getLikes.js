import { likeUrl } from './apiData.js';

const getLikes = async () => {
  try {
    const response = await fetch(likeUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export default getLikes;