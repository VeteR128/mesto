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
  addImage(initialCardsName[i], initialCardslink[i]);
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
formName.value = profileTitle.textContent;
formAbout.value = profileSubtitle.textContent;

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = formName.value;
  profileSubtitle.textContent = formAbout.value;
  closePopup(editPopup);
}
function setPopupInfo(evt) {
  imagePopup.setAttribute("src", evt.target.getAttribute("src"));
  const elementPopup = evt.target.closest(".element");
  const elementText = elementPopup.querySelector(".element__title");
  popupText.textContent = elementText.textContent;
}
function addImage(text, scrvalue) {
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
      setPopupInfo(evt);
      openPopup(cardPopup);
    });
}
function closeOverlay(popups) {
  popups.forEach((items) =>
    items.addEventListener("click", (evt) => {
      if (evt.target === items) {
        popups.forEach((item) => {
          closePopup(item);
        });
      }
    })
  );
}
function pressEsc(evt) {
  if ((evt.key = 27)) {
    popups.forEach((items) => {
      closePopup(items);
    });
  }
}
closeOverlay(popups);

buttonEdit.addEventListener("click", () => {
  openPopup(editPopup);
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
  addImage(nameCard.value, srcImage.value);
  closePopup(addPopup);
  nameCard.value = "";
  srcImage.value = "";
});

btnCloseImgPopup.addEventListener("click", () => {
  closePopup(cardPopup);
});

document.addEventListener("keydown", pressEsc);
