const numberCategoriesEl = document.querySelectorAll('.item');
const number = numberCategoriesEl.length;

console.log(`Number of categories: ${number}`);

const categoriesEl = numberCategoriesEl.forEach(element => {
  const category = element.firstElementChild.textContent;
  const elements = element.lastElementChild.children.length;

  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
});
