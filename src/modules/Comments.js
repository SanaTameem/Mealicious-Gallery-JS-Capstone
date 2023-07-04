const commentGet = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T1s4xFdr6wtV60QfASVp/comments?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

  });
  const data = await response.json();
  return data;
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