export * from './constants';

export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error('Can not store in LS');
  }

  const valueToStore =
    typeof value !== 'string' ? JSON.stringify(value) : value;

  localStorage.setItem(key, valueToStore);
};
