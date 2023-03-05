function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


//!Пошук елементів
const refs = {
  containerEl: document.querySelector('body'),
  buttonChangeColorEl: document.querySelector('.change-color'),
  spanColorEl: document.querySelector('.color'),
};

refs.buttonChangeColorEl.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  let colorBody = getRandomHexColor();  //! Рандомний колір кожен раз

  refs.containerEl.style.backgroundColor = colorBody; //! Фарбуємо бекграунд в рандомний колір
  refs.spanColorEl.textContent = colorBody;  //! Прописуємо назву кольору в елемент span
}
