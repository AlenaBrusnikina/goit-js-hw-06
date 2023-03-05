//! Пошук елементів
const defaultValue = 'Anonymous';
const formInputEl = document.querySelector('#name-input');
const formTextEl = document.querySelector('#name-output');


//! Додавання слухача події до інпута
//! Присвоюємо поточне значення інпута в span
//! Якщо інпут не заповнений то показати 'Anonymous'

formInputEl.addEventListener('input', event => {
  formTextEl.textContent = event.target.value.trim() === '' ? defaultValue : event.target.value;
});
