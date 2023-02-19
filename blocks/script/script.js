let editbutton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__vector");
let form = document.querySelector(".form");
let nameForm = document.querySelector(".profile__title");
let about = document.querySelector(".profile__subtitle");
let formdata = document.querySelectorAll(".form__data");

function popupAdd() {
  popup.classList.add("popup_opened");
}
function popupClose() {
  popup.classList.remove("popup_opened");
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  nameForm.textContent = formdata[0].value;
  about.textContent = formdata[1].value;
  popupClose();
}
formdata[0].value = nameForm.textContent;
formdata[1].value = about.textContent;

editbutton.addEventListener("click", popupAdd);

closeButton.addEventListener("click", popupClose);

form.addEventListener("submit", handleFormSubmit);
