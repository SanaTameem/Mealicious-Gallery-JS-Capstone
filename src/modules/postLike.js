import { likeUrl } from './apiData.js';
import updateLikesCount from './updateLikes.js';

const postLike = async (itemId, container) => {
  try {
    const response = await fetch(likeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
        action: 'like',
      }),
    });
    if (response.ok) {
      updateLikesCount(itemId, container);
    } else {
      console.error('Failed to record interaction:', response.status);
    }
  } catch (error) {
    console.error('Error recording interaction:', error);
  }
};
export default postLike;