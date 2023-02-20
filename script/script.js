let editbutton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__vector");
let form = document.querySelector(".form");
let nameForm = document.querySelector(".profile__title");
let about = document.querySelector(".profile__subtitle");
let formName = document.querySelector(".form__data_type_name");
let formAbout = document.querySelector(".form__data_type_about");

function popupAdd() {
  popup.classList.add("popup_opened");
  formName.value = nameForm.textContent;
  formAbout.value = about.textContent;
}
function popupClose() {
  popup.classList.remove("popup_opened");
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  nameForm.textContent = formName.value;
  about.textContent = formAbout.value;
  popupClose();
}

editbutton.addEventListener("click", popupAdd);

closeButton.addEventListener("click", popupClose);

form.addEventListener("submit", handleFormSubmit);
