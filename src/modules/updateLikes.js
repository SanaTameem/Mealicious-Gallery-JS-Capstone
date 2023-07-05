const updateLikesCount = (itemId, container) => {
  const numOfLikeDiv = container.querySelector('.number-of-likes');
  let mealLikes = parseInt(numOfLikeDiv.textContent, 10);
  mealLikes += 1;
  numOfLikeDiv.textContent = `${mealLikes} Likes`;
};

export default updateLikesCount;