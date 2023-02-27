function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  containerEl: document.querySelector('body'),
  buttonChangeColorEl: document.querySelector('.change-color'),
  spanColorEl: document.querySelector('.color'),
};

refs.buttonChangeColorEl.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  let colorBody = getRandomHexColor();

  refs.containerEl.style.backgroundColor = colorBody;
  refs.spanColorEl.textContent = colorBody;
}
