//! Пошук формми
const formEl = document.querySelector('.login-form');

//! Додавання слухача події
formEl.addEventListener('submit', onFormSubmit);
formEl.reset();

//! Функція відправки форми
function onFormSubmit(event) {
  event.preventDefault(); //! Cкасування дії браузера за замовчуванням (відправки форми автоматично)


  //! Для доступу до елементів форми використовуєтсья властивість elements
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  //! Перевірка, чи заповненні всі поля
  if (email === '' || password === '') {
    return alert('Всі поля повинні бути заповнені!');
  }

  //! Об'єкт інформації про користувача
  const formData = {
    email,
    password,
  };

  //! Виведення об'єкту із введеними даними в консоль
  console.log(formData);

  //! Очищення значення полів форми методом reset
  event.target.reset();
}
