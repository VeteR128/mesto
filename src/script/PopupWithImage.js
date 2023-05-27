import { Popup } from "./popup.js";
export class PopupWithImage extends Popup {
  constructor(popup, openButton) {
    super(popup, openButton);
  }
  open(Event) {
    if (Event.target.classList.contains(this._openButton)) {
      const elementPopup = Event.target.closest(".element");
      const elementImage = elementPopup.querySelector(".element__image");
      const elementText = elementPopup.querySelector(".element__title");
      const popupImage = this._popup.querySelector(".popup__img");
      this._popup.classList.add("popup_opened");
      popupImage.setAttribute("src", elementImage.getAttribute("src"));
      popupImage.setAttribute("alt", elementText.textContent);
      this._popup.querySelector(".popup__text").textContent =
        elementText.textContent;
    }
  }
}
