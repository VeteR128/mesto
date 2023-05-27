import { FormValidator } from "./FormValidator.js";
import { Card } from "./card.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { Popup } from "./popup.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { Section } from "./sections.js";
import { UserInfo } from "./UserInfo.js";
import "../pages/index.css";
import {
  buttonEdit,
  profileTitle,
  profileSubtitle,
  formName,
  formAbout,
  buttonAdd,
  imagePopupButton,
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
} from "./constants.js";
const render = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const createCard = new Card(item.name, item.link, "#element");
      const cardElement = createCard.generateCard();
      render.setItem(cardElement);
    },
  },
  elements
);
render.renderItems();

const validationEditForm = new FormValidator(validationSettings, editForm);
validationEditForm.enableValidation();
const validationAddForm = new FormValidator(validationSettings, addForm);
validationAddForm.enableValidation();
const openAddPopup = new PopupWithForm(
  addPopup,
  buttonAdd,
  function submitCallback() {
    const render = new Section(
      {
        data: inputsData,
        renderer: (item) => {
          const createCard = new Card(
            item.nameCard.value,
            item.srcImage.value,
            "#element"
          );
          const cardElement = createCard.generateCard();
          render.setItem(cardElement);
        },
      },
      elements
    );
    render.renderItems();
  }
);
const openEditPopup = new PopupWithForm(
  editPopup,
  buttonEdit,
  function handleFormSubmit() {
    const setPopupInfo = new UserInfo(profileTitle, profileSubtitle);
    setPopupInfo.setUserInfo(formName, formAbout);
  }
);
document.querySelector(buttonEdit).addEventListener("click", () => {
  const setPopupInfo = new UserInfo(profileTitle, profileSubtitle);
  formName.value = setPopupInfo.getUserInfo().userName;
  formAbout.value = setPopupInfo.getUserInfo().userAbout;
});
openEditPopup.setEventListeners();
openAddPopup.setEventListeners();
const openImagePopup = new PopupWithImage(imagePopup, imagePopupButton);
openImagePopup.setEventListeners();
