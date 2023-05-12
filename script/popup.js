export class Popup {
  constructor(popup, openButton) {
    this._popup = popup;
    this._openButton = openButton;
  }
  open(Event) {
    if (Event.target.closest(this._openButton)) {
      this._popup.classList.add("popup_opened");
    }
  }
  close = () => {
    this._popup.classList.remove("popup_opened");
  };
  setEventListeners() {
    document.addEventListener("click", (e) => {
      this.open(e);
    });
    let closeBtn = this._popup.querySelector(".popup__vector");
    closeBtn.addEventListener("click", this.close);
    this._popup.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup_opened")) {
        this.close();
      }
    });
    document.addEventListener("keydown", (e) => {
      this._handleEscClose(e);
    });
  }
  _handleEscClose(Event) {
    if (Event.key === "Escape") {
      this.close();
    }
  }
}
