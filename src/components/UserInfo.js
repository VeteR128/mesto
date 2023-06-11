export class UserInfo {
  constructor(name, about) {
    this._name = name;
    this._about = about;
  }
  getUserInfo() {
    const userName = this._name.textContent;
    const userAbout = this._about.textContent;
    return { userName, userAbout };
  }
  setUserInfo(item) {
    this._name.textContent = item[0].namew;
    this._about.textContent = item[0].about;
  }
}
