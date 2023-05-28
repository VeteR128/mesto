import { FormValidator } from "../script/FormValidator.js";
import { Card } from "../script/card.js";
import { PopupWithImage } from "../script/PopupWithImage.js";
import { Popup } from "../script/popup.js";
import { PopupWithForm } from "../script/PopupWithForm.js";
import { Section } from "../script/sections.js";
import { UserInfo } from "../script/UserInfo.js";
import "../pages/index.css";
import { buttonEdit, buttonAdd, imagePopupButton } from "../script/utils.js";
import {
  profileTitle,
  profileSubtitle,
  formName,
  formAbout,
  elements,
  imagePopup,
  editPopup,
  addPopup,
  editForm,
  srcImage,
  nameCard,
  addForm,
  validationSettings,
  initialCards,
  inputsData,
} from "../script/constants.js";
const openImagePopup = new PopupWithImage(imagePopup);
const createCard = (name, link) => {
  const card = new Card(name, link, "#element", function handleCardClick(
    text,
    src
  ) {
    openImagePopup.setEventListeners();
    openImagePopup.open(text, src);
  });
  return card.generateCard();
};
const renderCards = (cards, elements) => {
  const render = new Section(
    {
      data: cards,
      renderer: (item) => {
        render.setItem(createCard(item.card, item.url));
      },
    },
    elements
  );
  render.renderItems();
};
renderCards(initialCards, elements);

const validationEditForm = new FormValidator(validationSettings, editForm);
validationEditForm.enableValidation();
const validationAddForm = new FormValidator(validationSettings, addForm);
validationAddForm.enableValidation();
const openAddPopup = new PopupWithForm(addPopup, function submitCallback(item) {
  renderCards(item, elements);
});
const setPopupInfo = new UserInfo(profileTitle, profileSubtitle);
const openEditPopup = new PopupWithForm(editPopup, function handleFormSubmit(
  item
) {
  setPopupInfo.setUserInfo(item);
});
console.log(formName);
document.querySelector(buttonEdit).addEventListener("click", () => {
  openEditPopup.setEventListeners();
  openEditPopup.open();
  const popupInfo = setPopupInfo.getUserInfo();
  formName.value = popupInfo.userName;
  formAbout.value = popupInfo.userAbout;
});

document.querySelector(buttonAdd).addEventListener("click", () => {
  openAddPopup.open();
  openAddPopup.setEventListeners();
});
