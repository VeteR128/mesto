function showSpanError(errorTextElement, validationMessage, errorClass) {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(errorClass);
}
function hideSpanError(errorTextElement, errorClass) {
  errorTextElement.textContent = "";
  errorTextElement.classList.remove(errorClass);
}
function checkImputValidaty(input, inputErrorClass, errorClass) {
  const errorTextElement = document.querySelector(
    `${inputErrorClass}${input.name}`
  );
  if (!input.validity.valid) {
    showSpanError(errorTextElement, input.validationMessage, errorClass);
  } else {
    hideSpanError(errorTextElement, errorClass);
  }
}
function checkImputsValidaty(inputList) {
  return Array.from(inputList).some((input) => !input.validity.valid);
}
function toggleButtonState(submitButton, inactiveButtonClass, inputList) {
  if (!checkImputsValidaty(inputList)) {
    submitButton.classList.remove(inactiveButtonClass);
  } else {
    submitButton.classList.add(inactiveButtonClass);
  }
}
function setEventListener(
  form,
  inputList,
  inputErrorClass,
  errorClass,
  submitButton,
  inactiveButtonClass
) {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkImputValidaty(input, inputErrorClass, errorClass);
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
      config.inactiveButtonClass
    );
  });
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__data",
  inputErrorClass: ".form__data-error_type_",
  errorClass: "form__data-error",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
});
enableValidation();
