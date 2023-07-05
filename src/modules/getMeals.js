import { apiData } from './apiData.js';

const getMeals = async () => {
  const response = await fetch(apiData);
  const { meals } = await response.json();
  return meals;
};

export default getMeals;