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
    if (item[0] === undefined) {
      this._name.textContent = item.name;
      this._about.textContent = item.about;
    } else {
      this._name.textContent = item[0].namew;
      this._about.textContent = item[0].about;
    }
  }
  setAvatar(item, avatar) {
    console.log(item.length);
    if (item.length > 2) {
      avatar.src = item;
    } else {
      avatar.src = item[0].avatar;
    }
  }
}
