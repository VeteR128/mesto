import { Popup } from "./popup.js";
export class PopupWithForm extends Popup {
  constructor(popup, callBacK) {
    super(popup);
    this._callBacK = callBacK;
    this._form = this._popup.querySelector(".form");
    this._inputs = this._popup.querySelectorAll(".form__data");
    this._Event = () => {
      this._callBacK(this._getInputValues());
    };
  }
  close = () => {
    this._form.reset();

    super.close();
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._Event);
    this._form.addEventListener("submit", this.close);
  }
  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return [this._formValues];
  }
}
