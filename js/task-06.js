
const formInputEl = document.querySelector('#validation-input');


formInputEl.addEventListener('blur', (event) => {
        const valueLength = event.target.value.trim();
        console.log(valueLength.length);
        const dataLength = formInputEl.getAttribute('data-length');  

    if (valueLength.length == dataLength) {
        formInputEl.classList.add('valid')
        formInputEl.classList.remove('invalid')
    }
    else {
        formInputEl.classList.add('invalid')
        formInputEl.classList.remove('valid')
    }
});


