function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const dataCreat = document.querySelector('[data-create]');
const dataDestroy = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    const size = 30 + i * 10;
    const color = getRandomHexColor();

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = color;

    boxEl.append(div);
  }
}

const handleClick = () => {
  createBoxes(inputEl.value);
};

dataCreat.addEventListener('click', handleClick);

const deletesBox = () => {
  boxEl.innerHTML = '';
};

dataDestroy.addEventListener('click', () => {
  boxEl.innerHTML = '';
  inputEl.value = '';
});
