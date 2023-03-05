//! Пошук елементів
const inputRangeEl = document.querySelector('#font-size-control');
const textTitleEl = document.querySelector('#text');

//! Додавання слухача подій
inputRangeEl.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    
    //!Зміна розміру тексту
    textTitleEl.style.fontSize = `${inputValue}px`;
    console.log(textTitleEl);

});





