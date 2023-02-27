const inputRangeEl = document.querySelector('#font-size-control');
const textTitleEl = document.querySelector('#text');


inputRangeEl.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    
    textTitleEl.style.fontSize = `${inputValue}px`;
    console.log(textTitleEl);

});





