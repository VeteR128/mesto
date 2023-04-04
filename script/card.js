export class card {
  constructor(text, src, templateSelector) {
    this._text = text;
    this._src = src;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventLiseners();
    this._element.querySelector(".element__image").src = this._src;
    this._element.querySelector(".element__image").alt = this._text;
    this._element.querySelector(".element__title").textContent = this._text;
    return this._element;
  }
  _setEventLiseners() {
    this._element
      .querySelector(".element__vector-like")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__vector-like_active");
      });
    this._element
      .querySelector(".element__vector-delete")
      .addEventListener("click", function (evt) {
        evt.target.closest(".element").remove();
      });
    this._element
      .querySelector(".element__image")
      .addEventListener("click", (evt) => {
        setPopupInfo(evt);
        openPopup(cardPopup);
      });
  }
}
