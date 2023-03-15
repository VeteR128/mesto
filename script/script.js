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
initialCards.forEach((item) => {
  addImage(item.name, item.link);
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
function setPopupInfo(evt) {
  imagePopup.setAttribute("src", evt.target.getAttribute("src"));
  const elementPopup = evt.target.closest(".element");
  const elementText = elementPopup.querySelector(".element__title");
  popupText.textContent = elementText.textContent;
  imagePopup.setAttribute("alt", elementText.textContent);
}
function createCard(text, scrvalue) {
  const formTemplate = document.querySelector("#element").content;
  const elementTemplate = formTemplate
    .querySelector(".element")
    .cloneNode(true);
  const elementImage = elementTemplate.querySelector(".element__image");
  elementTemplate.querySelector(".element__title").textContent = text;
  elementImage.src = scrvalue;
  elementImage.alt = text;
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

  elementImage.addEventListener("click", (evt) => {
    setPopupInfo(evt);
    openPopup(cardPopup);
  });
  return elementTemplate;
}
function addImage(name, link) {
  const cardTemplate = createCard(name, link);
  elements.prepend(cardTemplate);
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
  addImage(nameCard.value, srcImage.value);
  closePopup(addPopup);
  nameCard.value = "";
  srcImage.value = "";
});

btnCloseImgPopup.addEventListener("click", () => {
  closePopup(cardPopup);
});
