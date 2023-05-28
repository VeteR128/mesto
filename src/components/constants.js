export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");
export const formName = document.querySelector(".form__data_type_name");
export const formAbout = document.querySelector(".form__data_type_about");

export const elements = document.querySelector(".elements");
export const imagePopup = document.querySelector(".popup_dark");

export const editPopup = document.querySelector(".popup_type_edit");
export const addPopup = document.querySelector(".popup_type_add");

export const editForm = document.querySelector(".form_type_edit");
export const srcImage = document.querySelector(".form__data_type_src");
export const nameCard = document.querySelector(".form__data_type_card-name");
export const addForm = document.querySelector(".form_type_add");

export const validationSettings = {
  formSelector: ".form",
  inputSelector: ".form__data",
  inputErrorClass: ".form__error-",
  errorClass: "form__data-error",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorStyle: "form__invalid",
};
export const inputsData = [{ name: nameCard.value, link: srcImage.value }];

export const initialCards = [
  {
    card: "Архыз",
    url: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    card: "Челябинская область",
    url: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    card: "Иваново",
    url: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    card: "Камчатка",
    url: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    card: "Холмогорский район",
    url: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    card: "Байкал",
    url: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];