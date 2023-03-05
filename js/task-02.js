
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];


//! Перебір кожного елементу
const ingredientEl = ingredients.map(element => {
  const elementList = document.createElement('li'); //! Створення елементу списку в розмітці
  elementList.classList.add('item'); //!Додавання класу до кожного елементу
  elementList.textContent = element; //! Додавання текстового контенту до кожного елементу

  return elementList;
});

//! Пошук списку і додавання масиву з елементами в середину списка
const itemEl = document.querySelector('#ingredients');
itemEl.append(...ingredientEl);
