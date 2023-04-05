export class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._inputList = form.querySelectorAll(config.inputSelector);
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._submitButton = form.querySelector(config.submitButtonSelector);
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorStyle = config.inputErrorStyle;
  }
  enableValidation() {
    this._setEventListener();
  }

  _setEventListener() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._disableSubmitButton();
    });
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidaty(input);
        this._toggleButtonState();
      });
    });
  }

  _toggleButtonState() {
    if (!this._checkInputsValidaty()) {
      this._enableSubmitButton();
    } else {
      this._disableSubmitButton();
    }
  }
  _disableSubmitButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }
  _enableSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }
  _checkInputsValidaty() {
    return Array.from(this._inputList).some((input) => !input.validity.valid);
  }
  _checkInputValidaty(input) {
    if (!input.validity.valid) {
      this._showSpanError(input, input.validationMessage);
    } else {
      this._hideSpanError(input);
    }
  }
  _showSpanError(input, validationMessage) {
    const errorTextElement = document.querySelector(
      `${this._inputErrorClass}${input.name}`
    );
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(this._errorClass);
    input.classList.add(this._inputErrorStyle);
  }
  _hideSpanError(input) {
    const errorTextElement = document.querySelector(
      `${this._inputErrorClass}${input.name}`
    );
    errorTextElement.textContent = "";
    errorTextElement.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorStyle);
  }
}
