export class FormValidator {
  constructor(config) {
    this._form = document.querySelectorAll(config.formSelector);
    this._inputList = document.querySelectorAll(config.inputSelector);
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._submitButton = document.querySelectorAll(config.submitButtonSelector);
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorStyle = config.inputErrorStyle;
  }
  enableValidation() {
    this._form.forEach(() => {
      this._setEventListener();
    });
  }

  _setEventListener() {
    document.addEventListener("submit", (evt) => {
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
    this._submitButton.forEach((item) => {
      item.classList.add(this._inactiveButtonClass);
      item.disabled = true;
    });
  }
  _enableSubmitButton() {
    this._submitButton.forEach((item) => {
      item.classList.remove(this._inactiveButtonClass);
      item.disabled = false;
    });
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
