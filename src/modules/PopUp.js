import getComments from './Comments.js';

const openPopup = async (id) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const { meals } = await response.json();
  const mainContainer = document.querySelector('.main-container');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');
  const comments = await getComments(id);
  let commentsHTML = '';
  if (comments.length > 0) {
    commentsHTML = comments
      .map((comment) => `<p>${comment.creation_date}- ${comment.username}:${comment.comment}</p>`)
      .join('');
  }

  const {
    strMealThumb, strMeal, strArea, strMeasure2, strCategory, strIngredient6,
  } = meals[0];

  popupContainer.innerHTML = `
      <button class="close-btn">&times;</button>
      <img src="${strMealThumb}" class="popup-image">
  <h2 class='popup-food-name'>${strMeal}</h2>
  <div class="popup-item-details-container">
    <p>Area: ${strArea}</p>
    <p>Measure: ${strMeasure2}</p>
    <p>Category: ${strCategory}</p>
    <p>Ingredient: ${strIngredient6}</p>
  </div>

  <h3 class="comments-title">Comments ('0')</h3>
      <div class="comments-div">
        ${commentsHTML}
      </div>
    `;

  document.querySelector('footer').classList.toggle('hidden');
  document.querySelector('header').classList.toggle('hidden');

  overlay.classList.toggle('visible');
  overlay.appendChild(popupContainer);
  mainContainer.appendChild(overlay);

  const closeBtn = overlay.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    overlay.classList.toggle('visible');
    document.querySelector('footer').classList.toggle('hidden');
    document.querySelector('header').classList.toggle('hidden');
  });
};

export default openPopup;
