export class Card {
  constructor(text, src, templateSelector, callback) {
    this._text = text;
    this._src = src;
    this._templateSelector = templateSelector;
    this._callback = callback;
    this._remove = (evt) => {
      evt.target.closest(".element").remove();
    };
    this._toggle = (evt) => {
      evt.target.classList.toggle("element__vector-like_active");
    };
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
    const imageEl = this._element.querySelector(".element__image");
    imageEl.src = this._src;
    imageEl.alt = this._text;
    this._element.querySelector(".element__title").textContent = this._text;
    return this._element;
  }
  _setEventLiseners() {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", (e) => {
        if (e.target.classList.contains("element__image")) {
          this._callback(this._text, this._src);
        }
      });
    this._element
      .querySelector(".element__vector-like")
      .addEventListener("click", this._toggle);
    this._element
      .querySelector(".element__vector-delete")
      .addEventListener("click", this._remove);
  }
}
