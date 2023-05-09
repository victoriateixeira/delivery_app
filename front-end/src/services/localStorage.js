if (!JSON.parse(localStorage.getItem('user'))) {
  localStorage.setItem('user', JSON.stringify({}));
}

export const saveUser = (getUser) => localStorage
  .setItem('user', JSON.stringify(getUser));

export const readUser = () => (
  JSON.parse(localStorage.getItem('user')));
