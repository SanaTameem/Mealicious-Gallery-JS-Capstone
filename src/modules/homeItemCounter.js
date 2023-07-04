import { apiData } from './apiData.js';

const homeItemCounter = async () => {
  const response = await fetch(apiData);
  const data = await response.json();
  return data.meals.length;
};

export default homeItemCounter;