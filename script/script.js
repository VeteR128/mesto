import { FormValidator } from "./FormValidator.js";
import { Card } from "./card.js";

const buttonEdit = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formName = document.querySelector(".form__data_type_name");
const formAbout = document.querySelector(".form__data_type_about");
const buttonAdd = document.querySelector(".profile__add-button");
const elements = document.querySelector(".elements");
const imagePopup = document.querySelector(".popup__img");
const popupText = document.querySelector(".popup__text");
const editPopup = document.querySelector(".popup_type_edit");
const addPopup = document.querySelector(".popup_type_add");
const cardPopup = document.querySelector(".popup_type_open");
const btnCloseImgPopup = document.querySelector(".popup__vector_open-close");
const closeEdit = document.querySelector(".popup__vector_edit-close");
const btnCloseForm = document.querySelector(".popup__vector_add-close");
const editForm = document.querySelector(".form_type_edit");
const srcImage = document.querySelector(".form__data_type_src");
const nameCard = document.querySelector(".form__data_type_card-name");
const addForm = document.querySelector(".form_type_add");
const popups = document.querySelectorAll(".popup");

const validationSettings = {
  formSelector: ".form",
  inputSelector: ".form__data",
  inputErrorClass: ".form__error-",
  errorClass: "form__data-error",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorStyle: "form__invalid",
};
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function setImagePopupInfo(evt) {
  const elementPopup = evt.target.closest(".element");
  const elementImage = elementPopup.querySelector(".element__image");
  const elementText = elementPopup.querySelector(".element__title");
  imagePopup.setAttribute("src", elementImage.getAttribute("src"));
  popupText.textContent = elementText.textContent;
  imagePopup.setAttribute("alt", elementText.textContent);
}

initialCards.forEach((item) => {
  const createCard = new Card(item.name, item.link, "#element");
  const cardElement = createCard.generateCard();
  elements.prepend(cardElement);
});
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", pressEsc);
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", pressEsc);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = formName.value;
  profileSubtitle.textContent = formAbout.value;
  closePopup(editPopup);
}

function handleOverlay(popups) {
  popups.forEach((item) =>
    item.addEventListener("click", (evt) => {
      if (evt.target === item) {
        closePopup(item);
      }
    })
  );
}
function pressEsc(evt) {
  if (evt.key === "Escape") {
    popups.forEach(closePopup);
  }
}
handleOverlay(popups);

buttonEdit.addEventListener("click", () => {
  openPopup(editPopup);
  formName.value = profileTitle.textContent;
  formAbout.value = profileSubtitle.textContent;
});
buttonAdd.addEventListener("click", () => {
  openPopup(addPopup);
});

closeEdit.addEventListener("click", () => {
  closePopup(editPopup);
});

btnCloseForm.addEventListener("click", () => {
  closePopup(addPopup);
});

editForm.addEventListener("submit", handleFormSubmit);

addForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = new Card(nameCard.value, srcImage.value, "#element");
  const cardElement = newCard.generateCard();
  elements.prepend(cardElement);

  closePopup(addPopup);
  nameCard.value = "";
  srcImage.value = "";
});

btnCloseImgPopup.addEventListener("click", () => {
  closePopup(cardPopup);
});
document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("element__image")) {
    setImagePopupInfo(evt);
    openPopup(cardPopup);
  }
});
const validationEditForm = new FormValidator(validationSettings, editForm);
validationEditForm.enableValidation();
const validationAddForm = new FormValidator(validationSettings, addForm);
validationAddForm.enableValidation();
