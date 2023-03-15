function showSpanError(
  errorTextElement,
  validationMessage,
  errorClass,
  input,
  inputErrorStyle
) {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(errorClass);
  input.classList.add(inputErrorStyle);
}
function hideSpanError(errorTextElement, errorClass, input, inputErrorStyle) {
  errorTextElement.textContent = "";
  errorTextElement.classList.remove(errorClass);
  input.classList.remove(inputErrorStyle);
}
function checkInputValidaty(
  input,
  inputErrorClass,
  errorClass,
  inputErrorStyle
) {
  const errorTextElement = document.querySelector(
    `${inputErrorClass}${input.name}`
  );

  if (!input.validity.valid) {
    showSpanError(
      errorTextElement,
      input.validationMessage,
      errorClass,
      input,
      inputErrorStyle
    );
  } else {
    hideSpanError(errorTextElement, errorClass, input, inputErrorStyle);
  }
}
function checkInputsValidaty(inputList) {
  return Array.from(inputList).some((input) => !input.validity.valid);
}
function enableSubmitButton(submitButton, inactiveButtonClass) {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}
function disableSubmitButton(submitButton, inactiveButtonClass) {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}

function toggleButtonState(submitButton, inactiveButtonClass, inputList) {
  if (!checkInputsValidaty(inputList)) {
    enableSubmitButton(submitButton, inactiveButtonClass);
  } else {
    disableSubmitButton(submitButton, inactiveButtonClass);
  }
}
function setEventListener(
  form,
  inputList,
  inputErrorClass,
  errorClass,
  submitButton,
  inactiveButtonClass,
  inputErrorStyle
) {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    disableSubmitButton(submitButton, inactiveButtonClass);
  });
  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkInputValidaty(input, inputErrorClass, errorClass, inputErrorStyle);
      toggleButtonState(submitButton, inactiveButtonClass, inputList);
    });
  });
}

function enableValidation(config) {
  const form = document.querySelectorAll(config.formSelector);

  form.forEach((item) => {
    const inputList = item.querySelectorAll(config.inputSelector);
    const submitButton = item.querySelector(config.submitButtonSelector);

    setEventListener(
      item,
      inputList,
      config.inputErrorClass,
      config.errorClass,
      submitButton,
      config.inactiveButtonClass,
      config.inputErrorStyle
    );
  });
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__data",
  inputErrorClass: ".form__error-",
  errorClass: "form__data-error",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorStyle: "form__invalid",
});
