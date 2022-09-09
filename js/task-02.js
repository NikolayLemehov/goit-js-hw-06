const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('ul#ingredients');

const getLiMarkup = (ingredient) => `<li class="item">${ingredient}</li>`
const getListMarkup = (ingredientsList) => ingredientsList.map(it => getLiMarkup(it)).join('')

ingredientsRef.insertAdjacentHTML('afterbegin', getListMarkup(ingredients));
