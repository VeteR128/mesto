import { Popup } from "./popup.js";
export class PopupWithForm extends Popup {
  constructor(popup, openButton, callBacK) {
    super(popup, openButton);
    this._callBacK = callBacK;
  }
  close = () => {
    this._popup.classList.remove("popup_opened");
    let inputs = this._popup.querySelectorAll(".form__data");
    inputs.forEach((item) => {
      item.value = "";
    });
  };

  setEventListeners() {
    super.setEventListeners();

    const form = this._popup.querySelector(".form");
    form.addEventListener("submit", this._callBacK);
    form.addEventListener("submit", this.close);
  }
}
