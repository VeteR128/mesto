import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Popup } from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import "../pages/index.css";
import {
  buttonEdit,
  buttonAdd,
  profileTitle,
  profileSubtitle,
  formName,
  formAbout,
  elements,
  imagePopup,
  editPopup,
  addPopup,
  editForm,
  addForm,
  validationSettings,
  initialCards,
} from "../utils/constans.js";

const openImagePopup = new PopupWithImage(imagePopup);
openImagePopup.setEventListeners();
const createCard = (name, link) => {
  const card = new Card(name, link, "#element", function handleCardClick(
    text,
    src
  ) {
    openImagePopup.open(text, src);
  });
  return card.generateCard();
};

const render = new Section(
  {
    renderer: (item) => {
      render.setItem(createCard(item.card, item.url));
    },
  },
  elements
);
render.renderItems(initialCards);

const validationEditForm = new FormValidator(validationSettings, editForm);
validationEditForm.enableValidation();
const validationAddForm = new FormValidator(validationSettings, addForm);
validationAddForm.enableValidation();
const openAddPopup = new PopupWithForm(addPopup, function submitCallback(item) {
  render.renderItems(item);
});
const setPopupInfo = new UserInfo(profileTitle, profileSubtitle);
const openEditPopup = new PopupWithForm(editPopup, function handleFormSubmit(
  item
) {
  setPopupInfo.setUserInfo(item);
});

openEditPopup.setEventListeners();
document.querySelector(buttonEdit).addEventListener("click", () => {
  openEditPopup.open();
  const popupInfo = setPopupInfo.getUserInfo();
  formName.value = popupInfo.userName;
  formAbout.value = popupInfo.userAbout;
});
openAddPopup.setEventListeners();
document.querySelector(buttonAdd).addEventListener("click", () => {
  openAddPopup.open();
});
