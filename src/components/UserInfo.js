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
    console.log(item);
    console.log(item[0].name);
    this._name.textContent = item[0].name;
    this._about.textContent = item[0].about;
  }
}
