let editbutton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".form__vector");
let form = document.querySelector(".form");

editbutton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});

closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

let nameForm = document.querySelector(".profile__title");
let about = document.querySelector(".profile__subtitle");
console.log(nameForm.textContent);
console.log(about.textContent);

let formName = document.querySelector(".form__name");
let formAbout = document.querySelector(".form__about");

document.querySelector(".form__name").value = nameForm.textContent;
document.querySelector(".form__about").value = about.textContent;

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameForm.textContent = document.querySelector(".form__name").value;
  about.textContent = document.querySelector(".form__about").value;
  popup.classList.remove("popup_opened");
}

form.addEventListener("submit", handleFormSubmit);
