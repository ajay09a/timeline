export * from './constants';

export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error('Can not store in LS');
  }

  const valueToStore =
    typeof value !== 'string' ? JSON.stringify(value) : value;

  localStorage.setItem(key, valueToStore);
};


export const getItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error('Can get the value from LS');
  }

  return localStorage.getItem(key);
};

export const removeItemFromLocalStorage = (value, key) => {
  if (!key) {
    return console.error('Can get the value from LS');
  }

  localStorage.removeItem(key);
};

export const getFormBody = (params) => {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // ajay 123 => ajay%2020123

    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&'); // 'username=ajay&password=123213'
};
