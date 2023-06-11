import { FormValidator } from "../components/formValidator.js";
import { Card } from "../components/сard.js";
import { PopupWithImage } from "../components/popupWithImage.js";
import { Popup } from "../components/popup.js";
import { DeletePopup } from "../components/deletePopup.js";
import { PopupWithForm } from "../components/popupWithForm.js";
import { Section } from "../components/section.js";
import { UserInfo } from "../components/userInfo.js";
import "../pages/index.css";
import Api from "../components/api.js";

import {
  choisePopup,
  profileAvatar,
  avatarForm,
  buttonAvatar,
  avatarPopup,
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
import { data } from "autoprefixer";
const getInfo = new Api("cohort-69", "3288c40b-06c2-41cd-8c38-58ad812dc34e");
const deletePopup = new DeletePopup(choisePopup, function deleteCard(id) {
  getInfo.deleteCard(id);
});

const openImagePopup = new PopupWithImage(imagePopup);
openImagePopup.setEventListeners();
const createCard = (name, link, id, owner) => {
  const card = new Card(
    name,
    link,
    "#element",
    function handleCardClick(text, src) {
      openImagePopup.open(text, src);
    },
    function deleteCard(element) {
      deletePopup.open();
      console.log(element);
      deletePopup.setEventListeners(element);
    },
    id,
    owner
  );
  return card.generateCard();
};

const render = new Section(
  {
    renderer: (item) => {
      render.setItem(
        createCard(item.name, item.link, item._id, item.owner.about)
      );
    },
  },
  elements
);

const validationEditForm = new FormValidator(validationSettings, editForm);
validationEditForm.enableValidation();
const validationAddForm = new FormValidator(validationSettings, addForm);
validationAddForm.enableValidation();
const validationAvatarForm = new FormValidator(validationSettings, avatarForm);
validationAvatarForm.enableValidation();
const openAddPopup = new PopupWithForm(addPopup, function submitCallback(item) {
  getInfo.addNewCard(item[0].name, item[0].link);
  getInfo
    .getCards()
    .then((res) => res.json())
    .then((er) => {
      setTimeout(() => {
        console.log(er);
      }, 100);
    });
  getInfo
    .getCards()
    .then((res) => res.json())
    .then((er) => {
      setTimeout(() => {
        render.renderItems([er[0]]);
      }, 100);
    });
});
const setPopupInfo = new UserInfo(profileTitle, profileSubtitle);
const openEditPopup = new PopupWithForm(editPopup, function handleFormSubmit(
  item
) {
  setPopupInfo.setUserInfo(item);
  getInfo
    .patchUserInfo(profileTitle.textContent, profileSubtitle.textContent)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
const openAvatarPopup = new PopupWithForm(avatarPopup, function editAvatar(
  item
) {
  console.log(item);
  profileAvatar.src = item[0].avatar;
  console.log(profileAvatar.src);
  getInfo
    .patchAvatarImage(profileAvatar.src)
    .then((res) => res.json())
    .then((data) => console.log(data));
});

openAvatarPopup.setEventListeners();
document.querySelector(buttonAvatar).addEventListener("click", () => {
  openAvatarPopup.open();
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

getInfo
  .getUserInfo()
  .then((res) => res.json())
  .then((data) => {
    profileTitle.textContent = data.name;
    profileSubtitle.textContent = data.about;
    profileAvatar.src = data.avatar;
    console.log(data);
  });
getInfo
  .getCards()
  .then((res) => res.json())
  .then((er) => {
    setTimeout(() => {
      render.renderItems(er);
    }, 400);
    console.log(er);
  });
