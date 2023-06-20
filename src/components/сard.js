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
    likeCount,
    userId,
    ownerId
  ) {
    this._ownerId = ownerId;
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
    this._userId = userId;

    this._toggle = (evt) => {
      if (evt.target.classList.contains("element__vector-like_active")) {
        this._dislike(this._id);
      } else {
        this._like(this._id);
      }
    };
  }
  likeStatus = (likeCount) => {
    this._countLike.textContent = likeCount;
    this._likeColor.classList.toggle("element__vector-like_active");
  };
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
    this._element.setAttribute("owner", this._ownerId);
    console.log(this._userId === this._ownerId);
    this._deleteBasket = this._element.querySelector(".element__vector-delete");
    this._likeColor = this._element.querySelector(".element__vector-like");
    this._image = this._element.querySelector(".element__image");
    this._countLike = this._element.querySelector(".element__vector-count");
    if (!(this._userId === this._ownerId)) {
      this._deleteBasket.setAttribute("style", "display:none;");
    }

    this._isLike.forEach((item) =>
      item._id === this._userId
        ? this._likeColor.classList.add("element__vector-like_active")
        : console.log("false")
    );

    this._countLike.textContent = this._likeCount;
    this._setEventLiseners();

    this._image.src = this._src;
    this._image.alt = this._text;
    this._element.querySelector(".element__title").textContent = this._text;
    return this._element;
  }
  _setEventLiseners() {
    this._image.addEventListener("click", (e) => {
      if (e.target.classList.contains("element__image")) {
        this._callback(this._text, this._src);
      }
    });
    this._likeColor.addEventListener("click", this._toggle);
  }
}
