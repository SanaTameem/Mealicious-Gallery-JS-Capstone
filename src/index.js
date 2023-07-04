import './style.css';
import getMeals from './modules/getMeals.js';
import popUp from './modules/PopUp.js';
import getLikes from './modules/getLikes.js';

const galleryContainer = document.querySelector('.gallery-container');
let mealsArr = [];
const showCards = async () => {
  try {
    mealsArr = await getMeals();
    const likeData = await getLikes();
    mealsArr.forEach((meal, id) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('gallery-item');
      itemDiv.setAttribute('data-id', id);
      itemDiv.innerHTML = `
        <div class="img-container">
          <img src="${meal.strMealThumb}" alt="logo">
        </div>
        <div class="like-comment">
          <p class="item-name">${meal.strMeal}</p>
          <i class="fa-regular fa-heart" style="color: #ff0000;"></i>
        </div>
        <div class="number-of-likes"></div>
        <div class="button-container">
          <button class="comment-btn">Comments</button>
          <button class="reservation-btn">Reservation</button>
        </div>
      `;

      const numOfLikeDiv = itemDiv.querySelector('.number-of-likes');
      let mealLikes = 0;
      const like = likeData.find((like) => like.item_id === id);

      if (like) {
        mealLikes = like.likes;
      }
      numOfLikeDiv.textContent = `${mealLikes} Likes`;
      galleryContainer.appendChild(itemDiv);
      const commentBtns = itemDiv.querySelectorAll('.comment-btn');
      commentBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          popUp(meal.idMeal);
          // commentGet(meal.idMeal);
        });
      });
    });
  } catch (error) {
    console.error('Error showing cards:', error);
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await showCards();
});