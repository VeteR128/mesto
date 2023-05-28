import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }
  open(name, link) {
    this._popup.querySelector(".popup__text").textContent = name;
    const image = this._popup.querySelector(".popup__img");
    image.src = link;
    image.alt = `Изображение ${name}`;
    super.open();
  }
}
