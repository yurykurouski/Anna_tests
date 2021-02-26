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

export function changeUrl(url) {
  window.history.pushState({}, url, window.location.origin + url);
}