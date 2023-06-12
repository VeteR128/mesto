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
  closeSubmit = () => {
    this._form.querySelector(".form__submit").value = "Сохранение...";
    this._form.reset();
    setTimeout(() => {
      super.close();
      console.log(this._form);

      if (this._form.classList.contains("form_type_add")) {
        this._form.querySelector(".form__submit").value = "Создать";
      } else {
        this._form.querySelector(".form__submit").value = "Сохранить";
      }
    }, 1500);
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._Event);
    this._form.addEventListener("submit", this.closeSubmit);
  }
  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return [this._formValues];
  }
}
