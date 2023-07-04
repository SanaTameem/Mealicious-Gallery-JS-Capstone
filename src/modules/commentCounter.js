import { commentGet } from './Comments.js';

const updateCommentCounter = async (id) => {
  const comments = await commentGet(id);
  const commentCounterElement = document.querySelector('.comment-counter');
  if (commentCounterElement) {
    commentCounterElement.textContent = `(${comments.length})`;
  }
};

export default updateCommentCounter;