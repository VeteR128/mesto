import { Popup } from "./popup.js";
export class PopupWithForm extends Popup {
  constructor(popup, callBacK) {
    super(popup);
    this._callBacK = callBacK;
    this._form = this._popup.querySelector(".form");
    this._inputs = this._popup.querySelectorAll(".form__data");
    this._submitButton = this._form.querySelector(".form__submit");
    this._Event = () => {
      this._callBacK(this._getInputValues());
      this._setSubmitValue();
    };
    this._textSubmitButton = this._submitButton.value;
  }
  closeSubmit = () => {
    this._form.reset();
    super.close();
    console.log(this._form);
  };
  _setSubmitValue = () => {
    this._submitButton.value = "Сохранение...";
  };
  returnSubmitValue = () => {
    this._submitButton.value = this._textSubmitButton;
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._Event);
  }
  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return [this._formValues];
  }
}
