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
  getInfo
    .deleteCard(id)
    .then(() => {
      document.getElementById(id).remove();
      deletePopup.close();
    })
    .finally(() => {
      deletePopup.setSubmitValue();
    });
});

const openImagePopup = new PopupWithImage(imagePopup);
openImagePopup.setEventListeners();
const createCard = (
  name,
  link,
  id,
  owner,
  isLike,
  likeCount,
  userId,
  ownerID
) => {
  const card = new Card(
    name,
    link,
    "#element",
    function handleCardClick(text, src) {
      openImagePopup.open(text, src);
    },
    function deleteCard(element) {
      console.log(element);
    },
    id,
    owner,
    function like(id) {
      getInfo.like(id).then((res) => {
        console.log(res);
        card.likeStatus(res.likes.length);
      });
    },
    function dislike(id) {
      getInfo.dislike(id).then((res) => card.likeStatus(res.likes.length));
    },
    isLike,
    likeCount,
    userId,
    ownerID
  );
  return card.generateCard();
};

const render = new Section(
  {
    renderer: (item) => {
      render.setItem(
        createCard(
          item.name,
          item.link,
          item._id,
          item.owner.about,
          item.likes,
          item.likes.length,
          profileAvatar.id,
          item.owner._id
        )
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
    .then((er) => {
      console.log(er);
      return er;
    })
    .then((da) => {
      render.renderItems([da[0]]);
    })
    .then(() => {
      openAddPopup.closeSubmit();
    })
    .finally(() => {
      openAddPopup.returnSubmitValue();
    });
});
const setPopupInfo = new UserInfo(profileTitle, profileSubtitle);
const openEditPopup = new PopupWithForm(editPopup, function handleFormSubmit(
  item
) {
  setPopupInfo.setUserInfo(item);

  getInfo
    .patchUserInfo(profileTitle.textContent, profileSubtitle.textContent)
    .then(() => {
      openEditPopup.closeSubmit();
    })
    .finally(() => {
      openEditPopup.returnSubmitValue();
    });
});
const openAvatarPopup = new PopupWithForm(avatarPopup, function editAvatar(
  item
) {
  console.log(item);

  console.log(profileAvatar.src);
  getInfo
    .patchAvatarImage(item[0].avatar)
    .then(
      () => setPopupInfo.setAvatar(item, profileAvatar),
      () => {
        alert("-_-");
      }
    )
    .then(() => {
      openAvatarPopup.closeSubmit();
    })
    .finally(() => {
      openAvatarPopup.returnSubmitValue();
    });
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
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("element__vector-delete")) {
    const ele = e.target.closest(".element");
    deletePopup.open();
    deletePopup.setEventListeners(ele);
  }
});

Promise.all([getInfo.getUserInfo(), getInfo.getCards()]).then((res) => {
  setPopupInfo.setAvatar(res[0].avatar, profileAvatar);
  profileAvatar.id = res[0]._id;
  setPopupInfo.setUserInfo(res[0]);
  render.renderItems(res[1]);
});
