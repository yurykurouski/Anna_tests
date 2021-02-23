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
import { cabinetWrap, renderCabinetWrap } from "./cabinet-wrap.js";

function renderHeader() {
  const header = document.querySelector('header');
  header.innerHTML = template;

  const auth = header.querySelector('#auth a'),
    main = header.querySelector('#main'),
    form = header.querySelector('#search-form');

  const formData = new FormData();

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

    renderCabinetWrap();
    auth.addEventListener('click', cabinetWrap);
  } else {
    auth.textContent = 'Войти';
    auth.addEventListener('click', () => navigateToUrl(LOGIN_URL));
  }
}

export default renderHeader;