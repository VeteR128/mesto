import { profileTitle } from "../utils/constans";

export class Card {
  constructor(
    text,
    src,
    templateSelector,
    callback,
    removeCallback,
    id,
    name,
    like,
    dislike,
    isLike,
    likeCount
  ) {
    this._isLike = isLike;
    this._likeCount = likeCount;
    this._dislike = dislike;
    this._text = text;
    this._like = like;
    this._id = id;
    this._src = src;
    this._name = name;
    this._templateSelector = templateSelector;
    this._removeCallback = removeCallback;
    this._callback = callback;

    this._toggle = (evt) => {
      if (evt.target.classList.contains("element__vector-like_active")) {
        if (this._likeCount === 0) {
          this._element.querySelector(".element__vector-count").textContent =
            this._likeCount;
          evt.target.classList.toggle("element__vector-like_active");
          this._dislike(this._id);
        } else {
          this._element.querySelector(".element__vector-count").textContent =
            this._likeCount - 1;
          evt.target.classList.toggle("element__vector-like_active");
          this._dislike(this._id);
        }
      } else {
        if (this._likeCount === 0) {
          console.log(this._likeCount);
          evt.target.classList.toggle("element__vector-like_active");
          this._like(this._id);
          this._element.querySelector(".element__vector-count").textContent =
            this._likeCount + 1;
        } else {
          evt.target.classList.toggle("element__vector-like_active");
          this._like(this._id);
          this._element.querySelector(".element__vector-count").textContent =
            this._likeCount;
        }
      }
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
    this._element.id = this._id;
    this._element.setAttribute("name", this._name);

    if (
      !(this._name === document.querySelector(".profile__subtitle").textContent)
    ) {
      this._element
        .querySelector(".element__vector-delete")
        .setAttribute("style", "display:none;");
    }

    this._isLike.forEach((item) =>
      item.name === profileTitle.textContent
        ? this._element
            .querySelector(".element__vector-like")
            .classList.add("element__vector-like_active")
        : console.log("false")
    );

    this._element.querySelector(".element__vector-count").textContent =
      this._likeCount;
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
      .addEventListener("click", () => {
        this._removeCallback(this._element);
      });
  }
}
