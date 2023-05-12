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
  setUserInfo(userNameValue, userAboutValue) {
    this._name.textContent = userNameValue.value;
    this._about.textContent = userAboutValue.value;
  }
}
