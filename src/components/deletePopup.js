import { Popup } from "./popup.js";
export class DeletePopup extends Popup {
  constructor(popup, callback) {
    super(popup);
    this._callback = callback;

    this._form = this._popup.querySelector(".form");
  }

  setEventListeners(el) {
    super.setEventListeners();
    console.log(el.id);

    this._form.addEventListener("submit", () => {
      el.remove();
      this._callback(el.id);
    });
    this._form.addEventListener("submit", () => {
      super.close();
    });
  }
}
