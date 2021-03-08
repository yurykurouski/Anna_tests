import {
  CABINET_URL,
  CARDS_PAGE,
  INDEX_URLS,
  LOGIN_URL,
  NEW_QUEST_URL,
  REGISTRATION_URL,
  SHOW_COMPLETED,
  TEMPLATES_REGEX
} from "./constants.js";
import { getIdByUrl } from "./utils.js";
import currentUser from "./current-user.js";
import notFound from "./render/main/404.js";
import storageService from "./storage-service.js";
import renderHeader from "./components/header.js";
import changeTheme from "./operations/changeTheme.js";
import renderLogin from "./render/auth/render-login.js";
import renderMainPage from "./render/main/render-main.js";
import renderSignup from "./render/auth/render-signup.js";
import renderCabinet from "./render/cabinet/render-cabinet.js";
import renderQuestGenerator from "./render/generator/render-quest-generator.js";
import { renderExsistingAnquette } from "./render/ready/render-exsistingAnquette.js";
import renderCompleted from "./render/cabinet/completed/render-cabinet-completed.js";

export function renderPage() {
  const {
    pathname: currentUrl
  } = window.location;

  renderHeader();

  if (INDEX_URLS.includes(currentUrl)) {
    renderMainPage();
    changeTheme(storageService.get('Current theme'));
    return;
  }

  if (CARDS_PAGE.test(currentUrl)) {
    renderMainPage();
    changeTheme(storageService.get('Current theme'));
    return;
  }

  if (currentUrl === NEW_QUEST_URL) {
    renderQuestGenerator();
    changeTheme(storageService.get('Current theme'));
    return;
  }

  if (TEMPLATES_REGEX.test(currentUrl)) {
    renderExsistingAnquette(getIdByUrl());
    changeTheme(storageService.get('Current theme'));
    return;
  }

  if (currentUrl === CABINET_URL && currentUser.userData) {
    renderCabinet();
    changeTheme(storageService.get('Current theme'));
    return;
  }

  if (SHOW_COMPLETED.test(currentUrl) && currentUser.userData) {
    renderCompleted();
    changeTheme(storageService.get('Current theme'));
    return;
  }

  if (currentUrl === LOGIN_URL && !currentUser.userData) {
    renderLogin();
    changeTheme(storageService.get('Current theme'));
    return;
  }

  if (currentUrl === REGISTRATION_URL && !currentUser.userData) {
    renderSignup();
    changeTheme(storageService.get('Current theme'));
    return;
  }

  if (currentUrl === LOGIN_URL && currentUser.userData) {
    navigateToUrl('/');
    changeTheme(storageService.get('Current theme'));
    return;
  }

  if (currentUrl === REGISTRATION_URL && currentUser.userData) {
    navigateToUrl('/');
    changeTheme(storageService.get('Current theme'));
    return;
  }

  notFound();
}

export function navigateToUrl(url) {
  window.history.pushState({}, url, window.location.origin + url);

  renderPage();
}