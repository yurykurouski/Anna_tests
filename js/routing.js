/* const listRoutePattern = /^\/list\/\d+$/;

const INDEX_URLS = ['/index.html', '/'];

const REGISTRATION_URL = '/registration';

export const LOGIN_URL = '/login';

export function renderPage() {
  const {
    pathname: currentUrl
  } = window.location;

  if (!currentUser.userData && currentUrl === REGISTRATION_URL) {
    renderRegistration();

    return;
  }

  if (!currentUser.userData && currentUrl === LOGIN_URL) {
    renderLogin();

    return;
  }

  if (!currentUser.userData) {
    navigateToUrl(LOGIN_URL);

    return;
  }

  if (INDEX_URLS.includes(currentUrl)) {
    renderLists();

    return;
  }

  if (listRoutePattern.test(currentUrl)) {
    const listId = getListIdByUrl();
    const list = lists.getListById(listId);

    if (list.userId !== currentUser.userData.id) {
      navigateToUrl('/');
    }
    renderList();

    return;
  }

  navigateToUrl('/');
}

export function navigateToUrl(url) {

  window.history.pushState({}, url, window.location.origin + url);

  renderPage();
} */

import { INDEX_URLS, LOGIN_URL, REGISTRATION_URL } from "./constants.js";
import renderLogin from "./render/log-in/render-login.js";
import renderSignup from "./render/log-in/render-signup.js";
import renderMainPage from "./render/main/render-main.js";

export function renderPage() {
  const {
    pathname: currentUrl
  } = window.location;

  if (INDEX_URLS.includes(currentUrl)) {
    renderMainPage();

    return;
  }

  if (currentUrl === LOGIN_URL) {
    renderLogin();

    return;
  }

  if (currentUrl === REGISTRATION_URL) {
    renderSignup();

    return;
  }
}