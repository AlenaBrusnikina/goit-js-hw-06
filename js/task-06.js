
const formInputEl = document.querySelector('#validation-input');


formInputEl.addEventListener('blur', (event) => {

    if (event.target.value.length === formInputEl.getAttribute('data-length')) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove("invalid")
    }
    else {
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
      }
});
