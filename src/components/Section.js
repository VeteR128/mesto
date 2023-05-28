export class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._container = containerSelector;
    this._renderer = renderer;
  }

  setItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }
}
