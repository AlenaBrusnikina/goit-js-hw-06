function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//! Пошук елементів
const inputEl = document.querySelector('input');
const dataCreat = document.querySelector('[data-create]');
const dataDestroy = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');


//! Функція для створення div
//! Цикл для перебору кожного значення яке встановлюється amount
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    
    //! Стилізація через JS
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = color;

    //!Додавання в кінець елементу до #boxes
    boxEl.append(div);
  }
}

//Виклик функції
const handleClick = () => {
  createBoxes(inputEl.value);
};

//!Додавання слухача подій
dataCreat.addEventListener('click', handleClick);

//! Функція, яка видаляє всі створені елементи
const deletesBox = () => {
  boxEl.innerHTML = ''; //!очищення вмісту через пусту строку ''
};

//!Очищення форми при кліці на кнопку destroy
dataDestroy.addEventListener('click', () => {
  boxEl.innerHTML = '';
  inputEl.value = '';
});
