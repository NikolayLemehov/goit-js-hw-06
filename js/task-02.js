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
const getLiListMarkup = (ingredientsList) => ingredientsList.map(it => getLiMarkup(it)).join('')

ingredientsRef.insertAdjacentHTML('afterbegin', getLiListMarkup(ingredients));
