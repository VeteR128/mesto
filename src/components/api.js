class Api {
  constructor(cohort, authorization) {
    this._cohort = cohort;
    this._authorization = authorization;
  }

  getUserInfo = () => {
    return fetch(`https://nomoreparties.co/v1/${this._cohort}/users/me`, {
      method: "GET",
      headers: { authorization: this._authorization },
    });
  };
  getCards = () => {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/cards`, {
      method: "GET",
      headers: { authorization: this._authorization },
    });
  };
  patchUserInfo = (name, about) => {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  };
  patchAvatarImage = (avatar) => {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this._cohort}/users/me/avatar`,
      {
        method: "PATCH",
        headers: {
          authorization: this._authorization,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: avatar,
        }),
      }
    );
  };
  deleteCard = (id) => {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this._cohort}/cards/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: this._authorization,
        },
      }
    );
  };
  addNewCard = (name, link) => {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  };
}
export default Api;
