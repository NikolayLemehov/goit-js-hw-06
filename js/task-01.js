const categoriesListRef = document.querySelector('ul#categories');
const categoryItems = categoriesListRef?.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(it => {
  const category = it.querySelector('h2').textContent;
  const elementsCount = it.querySelectorAll(':scope > ul > li').length;
  console.log(`Category: ${category}\nElements: ${elementsCount}`)
})
