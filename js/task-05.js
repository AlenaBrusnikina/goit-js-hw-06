const defaultValue = 'Anonymous';
const formInputEl = document.querySelector('#name-input');
const formTextEl = document.querySelector('#name-output');

formInputEl.addEventListener('input', (event) => {
    formTextEl.textContent = event.target.value.trim() === '' ? defaultValue : event.target.value;
});

