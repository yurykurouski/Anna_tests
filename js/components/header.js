import {
  navigateToUrl
} from "../routing.js";
import {
  launchSearchBox
} from "./search-box.js";
import {
  LOGIN_URL
} from "../constants.js";
import currentUser from "../current-user.js";
import template from "../pages-templates/header/header.js";
import renderSearchPage from "../render/search/search-results.js";
import { showCabinetWrap, renderCabinetWrap } from "./cabinet-wrap.js";
import storageService from "../storage-service.js";
import changeTheme from "../operations/changeTheme.js";

function renderHeader() {
  const header = document.querySelector('header');
  header.innerHTML = template;

  const auth = header.querySelector('#auth a'),
    main = header.querySelector('#main'),
    form = header.querySelector('#search-form'),
    toggler = header.querySelector('#theme-toggler');

  form.addEventListener('input', launchSearchBox);
  form.addEventListener('submit', () => {
    const formData = new FormData(event.target);
    const searchRequest = formData.get('search');
    if (!searchRequest) {
      event.preventDefault();
      return;
    }
    renderSearchPage(event, searchRequest);
  });

  main.addEventListener('click', () => navigateToUrl('/'));

  if (currentUser.userData) {
    auth.textContent = 'Кабинет';
    toggler.setAttribute('src', 'img/nightlight_48dp.svg');

    toggler.addEventListener('click', () => {
      if (storageService.get('Current theme') === 'Light') {
        changeTheme('Dark');
        storageService.set('Current theme', 'Dark');
        toggler.setAttribute('src', 'img/daylight_48dp.svg');
      } else {
        changeTheme('Light');
        storageService.set('Current theme', 'Light');
        toggler.setAttribute('src', 'img/nightlight_48dp.svg');
      }

    });

    renderCabinetWrap();
    auth.addEventListener('click', showCabinetWrap);
  } else {
    auth.textContent = 'Войти';
    auth.addEventListener('click', () => navigateToUrl(LOGIN_URL));
  }
}

export default renderHeader;