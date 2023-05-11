export class Popup {
  constructor(popup, openButton) {
    this._popup = popup;
    this._openButton = openButton;
  }
  open(Event) {
    if (Event.target.closest(this._openButton)) {
      this._popup.classList.add("popup_opened");
    }
  }
  close = () => {
    this._popup.classList.remove("popup_opened");
  };
  setEventListeners() {
    document.addEventListener("click", (e) => {
      this.open(e);
    });
    this._popup
      .querySelector(".popup__vector")
      .addEventListener("click", this.close());
    this._popup.addEventListener("click", this.close());
    document.addEventListener("keydown", (e) => {
      this._handleEscClose(e);
    });
  }
  _handleEscClose(Event) {
    if (Event.key === "Escape") {
      this.close();
    }
  }
}
export class PopupWithImage extends Popup {
  constructor(popup, openButton) {
    super(popup, openButton);
  }
  open(Event) {
    if (Event.target.classList.contains(this._openButton)) {
      const imageSrc = Event.target.getAttribute("src");
      const elementPopup = Event.target.closest(".element");
      const elementImage = elementPopup.querySelector(".element__image");
      const elementText = elementPopup.querySelector(".element__title");
      this._popup.querySelector(".popup__img").setAttribute("src", imageSrc);
      this._popup.classList.add("popup_opened");
      this._popup.setAttribute("src", elementImage.getAttribute("src"));
      this._popup.setAttribute("alt", elementText.textContent);
      this._popup.querySelector(".popup__text").textContent =
        elementText.textContent;
    }
  }
}
export class PopupWithForm extends Popup {
  constructor(popup, openButton, callBack) {
    super(popup, openButton);
    this._callBack = callBack;
  }
  close = () => {
    let inputs = this._popup.querySelectorAll(".form__data");
    inputs.forEach((item) => {
      console.log(item.value);
      item.value = "";
    });
    this._popup.classList.remove("popup_opened");
  };
  _getInputValues() {
    const inputs = this._popup.querySelectorAll(".form__data");
    inputs.forEach((item) => {
      const inputValue = item.value;
      console.log(inputValue);
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup
      .querySelector(".form__submit")
      .addEventListener("submit", this._callBack);
  }
}
