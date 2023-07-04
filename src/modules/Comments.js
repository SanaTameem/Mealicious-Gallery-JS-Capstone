import axios from 'axios';

const commentGet = async (id) => {
  try {
    const response = await axios.get(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T1s4xFdr6wtV60QfASVp/comments?item_id=${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to fetch comments');
    }

    return response.data;
  } catch (error) {
    return [];
  }
};

const postComment = async (id, username, comment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T1s4xFdr6wtV60QfASVp/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });

  const updatedComments = await commentGet(id);
  return updatedComments;
};

export { commentGet, postComment };