import { ROOT_DIV } from "./constants.js";

export function generateId(arr) {
  if (!arr) {
    return 1
  }

  return arr.length + 1;
}

export function getIdByUrl() {
  const currentUrl = window.location.pathname;

  const splittedCurrentUrl = currentUrl.split('/');

  return parseInt(splittedCurrentUrl[splittedCurrentUrl.length - 1], 10);
}

export function makeUrlFromId(id) {
  return window.location.pathname+`/${id}`
}

export function showErrors(errors) {
  for (let key in errors) {
    const span = ROOT_DIV.querySelector(`span.${key}`);

    if (errors[key].length > 0) {

      const errorStr = errors[key].join('<br>');

      span.style.display = 'inline';
      span.innerHTML = errorStr;
    } else {
      span.innerHTML = '';
    }
  }
}

export function checkIfHasErrors(errors) {
  return Object.keys(errors).some(key => errors[key].length > 0);
}

export function changeUrl(url) {
  window.history.pushState({}, url, window.location.origin + url);
}


/* export function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
} */