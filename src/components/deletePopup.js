import { Popup } from "./popup.js";
export class DeletePopup extends Popup {
  constructor(popup, callback) {
    super(popup);
    this._callback = callback;

    this._form = this._popup.querySelector(".form");
    this._submit = this._form.querySelector(".form__submit");
    this.submit = () => this._callback(this.element.id);
    this.submitValue = () => {
      this.closeSubmit();
    };

    this._event = (e) => {
      if (
        e.target.classList.contains("popup_opened") ||
        e.target.classList.contains("popup__vector")
      ) {
        this.removeEventListener();
        this.close();
      }
    };
  }
  closeDeletePopup() {
    this.removeEventListener();
  }

  closeSubmit = () => {
    this._submit.value = "Удаление...";
  };
  setSubmitValue = () => {
    this._submit.value = "Да";
  };

  setEventListeners(el) {
    this.element = el;
    this._popup.addEventListener("click", this._event);
    this._form.addEventListener("submit", this.submit);
    this._form.addEventListener("submit", this.submitValue);
  }
  removeEventListener() {
    this._form.removeEventListener("submit", this.submit);
    this._form.removeEventListener("submit", this.submitValue);
  }
}
