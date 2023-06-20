class Api {
  constructor(cohort, authorization) {
    this._cohort = cohort;
    this._authorization = authorization;
  }

  getUserInfo = () => {
    return fetch(`https://nomoreparties.co/v1/${this._cohort}/users/me`, {
      method: "GET",
      headers: { authorization: this._authorization },
    }).then(this._checkResponse);
  };
  getCards = () => {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/cards`, {
      method: "GET",
      headers: { authorization: this._authorization },
    }).then(this._checkResponse);
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
    }).then(this._checkResponse);
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
    ).then(this._checkResponse);
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
    ).then(this._checkResponse);
  };
  like = (id) => {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this._cohort}/cards/${id}/likes`,
      {
        method: "PUT",
        headers: {
          authorization: this._authorization,
        },
      }
    ).then(this._checkResponse);
  };
  dislike = (id) => {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this._cohort}/cards/${id}/likes`,
      {
        method: "DELETE",
        headers: {
          authorization: this._authorization,
        },
      }
    ).then(this._checkResponse);
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
    }).then(this._checkResponse);
  };
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }
}
export default Api;
