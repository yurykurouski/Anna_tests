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

import {
  CABINET_URL,
  INDEX_URLS,
  LOGIN_URL,
  NEW_QUEST_URL,
  REGISTRATION_URL,
  TEMPLATES_REGEX
} from "./constants.js";
import currentUser from "./current-user.js";
import notFound from "./render/main/404.js";
import renderLogin from "./render/auth/render-login.js";
import renderMainPage from "./render/main/render-main.js";
import renderSignup from "./render/auth/render-signup.js";
import renderHeader from "./render/header/render-header.js";
import renderCabinet from "./render/cabinet/render-cabinet.js";
import renderQuestGenerator from "./render/generator/render-quest-generator.js";
import { renderExsistingAnquette } from "./render/ready/render-exsistingAnquette.js";
import { getIdByUrl } from "./utils.js";

export function renderPage() {
  const {
    pathname: currentUrl
  } = window.location;

  renderHeader();

  if (INDEX_URLS.includes(currentUrl)) {
    renderMainPage();

    return;
  }

  if (currentUrl === NEW_QUEST_URL) {
    renderQuestGenerator();

    return;
  }

  if (TEMPLATES_REGEX.test(currentUrl)) {
    renderExsistingAnquette(getIdByUrl);

    return;
  }

  if (currentUrl === CABINET_URL && currentUser.userData) {
    renderCabinet();

    return;
  }

  if (currentUrl === LOGIN_URL && !currentUser.userData) {
    renderLogin();

    return;
  }

  if (currentUrl === REGISTRATION_URL && !currentUser.userData) {
    renderSignup();

    return;
  }

  if (currentUrl === LOGIN_URL && currentUser.userData) {
    navigateToUrl('/')

    return;
  }

  if (currentUrl === REGISTRATION_URL && currentUser.userData) {
    navigateToUrl('/')

    return;
  }

  notFound();
}

export function navigateToUrl(url) {
  window.history.pushState({}, url, window.location.origin + url);

  renderPage();
}