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
  }
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", (e) => {
      this._handleEscClose(e);
    });
  }
  close() {
    this._popup.classList.remove("popup_opened");
    this._popup.removeEventListener("click", this._event);
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
