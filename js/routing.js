import {
  CABINET_URL,
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
import renderHeader from "./components/header.js";
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
    return;
  }

  if (currentUrl === NEW_QUEST_URL) {
    renderQuestGenerator();
    return;
  }

  if (TEMPLATES_REGEX.test(currentUrl)) {
    renderExsistingAnquette(getIdByUrl());
    return;
  }

  if (currentUrl === CABINET_URL && currentUser.userData) {
    renderCabinet();
    return;
  }

  if (SHOW_COMPLETED.test(currentUrl) && currentUser.userData) {
    renderCompleted();
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