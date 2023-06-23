import { Popup } from "./popup.js";
export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._text = this._popup.querySelector(".popup__text");
    this._image = this._popup.querySelector(".popup__img");
  }
  open(name, link) {
    this._text.textContent = name;
    this._image.src = link;
    this._image.alt = `Изображение ${name}`;
    super.open();
  }
}
