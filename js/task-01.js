//!Пошук елементів
const numberCategoriesEl = document.querySelectorAll('.item');
const number = numberCategoriesEl.length;

//!Виведення кількості категорій в консоль через .length
console.log(`Number of categories: ${number}`);


//! Перебирання кожного елемента/дитини з .item
const categoriesEl = numberCategoriesEl.forEach(element => {
  const category = element.firstElementChild.textContent;
  const elements = element.lastElementChild.children.length;

   //! Виведення тексту із кожного заголовку
  console.log(`Category: ${category}`);

   //! Виведення кількості елементів
  console.log(`Elements: ${elements}`);
});
