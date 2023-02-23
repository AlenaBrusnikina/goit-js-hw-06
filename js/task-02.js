const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientEl = ingredients.map(element => {
  const elementList = document.createElement('li');
  elementList.classList.add('item');
  elementList.textContent = element;

  return elementList;
})

const itemEl = document.querySelector('#ingredients');
itemEl.append(...ingredientEl);












