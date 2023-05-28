export class Popup {
  constructor(popup) {
    this._popup = popup;
    this._event = (e) => {
      if (
        e.target.classList.contains("popup_opened") ||
        e.target.classList.contains("popup__vector")
      ) {
        this.close();
      }
    };
    this.__handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", (e) => {
      this._handleEscClose(e);
    });
  }
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this.__handleEscClose);
  }
  setEventListeners() {
    this._popup.addEventListener("click", this._event);
  }
  _handleEscClose(Event) {
    if (Event.key === "Escape") {
      this.close();
    }
  }
}
