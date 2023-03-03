const editbutton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formName = document.querySelector(".form__data_type_name");
const formAbout = document.querySelector(".form__data_type_about");
const addButton = document.querySelector(".profile__add-button");
const elements = document.querySelector(".elements");
const imagePopup = document.querySelector(".popup__img");
const popupText = document.querySelector(".popup__text");
const editPopup = document.querySelector(".popup_type_edit");
const addPopup = document.querySelector(".popup_type_add");
const openPopup = document.querySelector(".popup_type_open");
const closeOpenBtn = document.querySelector(".popup__vector_open-close");
const closeEdit = document.querySelector(".popup__vector_edit-close");
const closeAddBtn = document.querySelector(".popup__vector_add-close");
const editForm = document.querySelector(".form_type_edit");
const srcImage = document.querySelector(".form__data_type_src");
const nameCard = document.querySelector(".form__data_type_card-name");
const addform = document.querySelector(".form_type_add");

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

for (i = 0; i < 6; i++) {
  addimage(initialCardsName[i], initialCardslink[i]);
}
function openpop(popup) {
  popup.classList.add("popup_opened");
}
function closepop(popup) {
  popup.classList.remove("popup_opened");
}
formName.value = profileTitle.textContent;
formAbout.value = profileSubtitle.textContent;

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = formName.value;
  profileSubtitle.textContent = formAbout.value;
  closepop(editPopup);
}
function setpopupinfo(evt) {
  imagePopup.setAttribute("src", evt.target.getAttribute("src"));
  const elementPopup = evt.target.closest(".element");
  const elementtext = elementPopup.querySelector(".element__title");
  popupText.textContent = elementtext.textContent;
}
function addimage(text, scrvalue) {
  const formTemplate = document.querySelector("#element").content;
  const elementTemplate = formTemplate
    .querySelector(".element")
    .cloneNode(true);
  elementTemplate.querySelector(".element__title").textContent = text;
  elementTemplate.querySelector(".element__image").src = scrvalue;
  elementTemplate.querySelector(".element__image").alt = text;
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

  elementTemplate
    .querySelector(".element__image")
    .addEventListener("click", (evt) => {
      setpopupinfo(evt);
      openpop(openPopup);
    });
}

editbutton.addEventListener("click", () => {
  openpop(editPopup);
});
addButton.addEventListener("click", () => {
  openpop(addPopup);
});

closeEdit.addEventListener("click", () => {
  closepop(editPopup);
});

closeAddBtn.addEventListener("click", () => {
  closepop(addPopup);
});

editForm.addEventListener("submit", handleFormSubmit);

addform.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addimage(nameCard.value, srcImage.value);
  closepop(addPopup);
  nameCard.value = "";
  srcImage.value = "";
});

closeOpenBtn.addEventListener("click", () => {
  closepop(openPopup);
});
