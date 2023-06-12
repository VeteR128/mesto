import { Popup } from "./popup.js";
export class DeletePopup extends Popup {
  constructor(popup, callback) {
    super(popup);
    this._callback = callback;

    this._form = this._popup.querySelector(".form");
  }

  closeSubmit = () => {
    this._form.querySelector(".form__submit").value = "Удаление...";
    setTimeout(() => {
      super.close();
      this._form.querySelector(".form__submit").value = "Удалить";
    }, 1500);
  };

  setEventListeners(el) {
    super.setEventListeners();
    console.log(el.id);

    this._form.addEventListener("submit", () => {
      el.remove();
      this._callback(el.id);
    });
    this._form.addEventListener("submit", () => {
      this.closeSubmit();
    });
  }
}
