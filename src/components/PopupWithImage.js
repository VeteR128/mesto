import { Popup } from "./popup.js";
export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._text = this._popup.querySelector(".popup__text");
  }
  open(name, link) {
    this._text.textContent = name;
    const image = this._popup.querySelector(".popup__img");
    image.src = link;
    image.alt = `Изображение ${name}`;
    super.open();
  }
}
