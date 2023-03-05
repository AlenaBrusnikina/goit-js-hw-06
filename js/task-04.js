//! Ініціалізація лічильника
let counterValue = 0;

// !Пошук елементів
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const myValue = document.querySelector('#value');


//! Додавання слухача до кнопки
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  myValue.textContent = counterValue;
});


//! Додавання слухача до кнопки
incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  myValue.textContent = counterValue;
});
