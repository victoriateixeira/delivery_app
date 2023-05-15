export const save = (set, item) => localStorage
  .setItem(set, JSON.stringify(item));

export const read = (item) => (
  JSON.parse(localStorage.getItem(item)));

export const remove = (item) => (
  localStorage.removeItem(item));
