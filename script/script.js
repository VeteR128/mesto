let editbutton = document.querySelector(".profile__edit-button");
let popup = document.querySelectorAll(".popup");
let closeButton = document.querySelectorAll(".popup__vector");
let form = document.querySelectorAll(".form");
let nameForm = document.querySelector(".profile__title");
let about = document.querySelector(".profile__subtitle");
let formName = document.querySelectorAll(".form__data_type_name");
let formAbout = document.querySelectorAll(".form__data_type_about");
let addButton = document.querySelector(".profile__add-button");
let elements = document.querySelector(".elements");

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
const initialCardslink = initialCards.map(function (el) {
  return el.link;
});
const initialCardsName = initialCards.map(function (el) {
  return el.name;
});
let imageLink = document.querySelectorAll(".element__image");
let imageName = document.querySelectorAll(".element__title");

for (i = 0; i < imageLink.length; i++) {
  imageLink[i].setAttribute("src", initialCardslink[i]);
  imageName[i].textContent = initialCardsName[i];
  imageLink[i].setAttribute("alt", initialCardsName[i]);
}
function popupOpen() {
  popup[0].classList.add("popup_opened");
  formName[0].value = nameForm.textContent;
  formAbout[0].value = about.textContent;
}
function popupClose() {
  popup[0].classList.remove("popup_opened");
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  nameForm.textContent = formName[0].value;
  about.textContent = formAbout[0].value;
  popupClose();
}
function popupAdd() {
  popup[1].classList.add("popup_opened");
}
function ClosePopupAdd() {
  popup[1].classList.remove("popup_opened");
}
function addCard() {}

editbutton.addEventListener("click", popupOpen);
addButton.addEventListener("click", popupAdd);

closeButton[0].addEventListener("click", popupClose);
closeButton[1].addEventListener("click", ClosePopupAdd);

form[0].addEventListener("submit", handleFormSubmit);

function addimage(evt) {
  evt.preventDefault();
  let formTemplate = document.querySelector("#element").content;
  let elementTemplate = formTemplate.querySelector(".element").cloneNode(true);
  elementTemplate.querySelector(".element__title").textContent =
    formName[1].value;
  elementTemplate.querySelector(".element__image").src = formAbout[1].value;
  elementTemplate
    .querySelector(".element__vector-like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__vector-like_active");
    });
  elementTemplate
    .querySelector(".element__vector-delete")
    .addEventListener("click", function (evt) {
      evt.target.closest(".element").remove();
    });
  elements.prepend(elementTemplate);
  ClosePopupAdd();
  elementTemplate
    .querySelector(".element__image")
    .addEventListener("click", popupiMAGE);
  elementTemplate
    .querySelector(".element__image")
    .addEventListener("click", popupTextContent);
}
form[1].addEventListener("submit", addimage);
let likeButton = document.querySelectorAll(".element__vector-like");

function like(evt) {
  evt.target.classList.toggle("element__vector-like_active");
}
function del(evt) {
  evt.target.closest(".element").remove();
}

let deleteButton = document.querySelectorAll(".element__vector-delete");
deleteButton.forEach(function (item) {
  item.addEventListener("click", del);
});

likeButton.forEach(function (item) {
  item.addEventListener("click", like);
});

function popupiMAGE(evt) {
  evt.target.getAttribute("src");

  popup[2].classList.add("popup_opened");
  let imagePopup = document.querySelector(".popup__img");
  imagePopup.setAttribute("src", evt.target.getAttribute("src"));
}

function popupTextContent(evt) {
  let elementPopup = evt.target.closest(".element");
  let elementtext = elementPopup.querySelector(".element__title");
  let popupText = document.querySelector(".popup__text");
  popupText.textContent = elementtext.textContent;
}
let imageElements = document.querySelectorAll(".element__image");

imageElements.forEach(function (item) {
  item.addEventListener("click", popupiMAGE);
  item.addEventListener("click", popupTextContent);
});

function popupImageClose() {
  popup[2].classList.remove("popup_opened");
}

closeButton[2].addEventListener("click", popupImageClose);
