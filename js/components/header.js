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
import { cabinetWrap, renderCabinetWrap } from "./cabinet-wrap.js";


function renderHeader() {
  const header = document.querySelector('header');
  header.innerHTML = template;

  const auth = header.querySelector('#auth a'),
    main = header.querySelector('#main'),
    searchBox = header.querySelector('#search-form'),
    cabinet = header.querySelector('#cabinet a');

  searchBox.addEventListener('input', launchSearchBox);
  searchBox.addEventListener('submit', (event) => event.preventDefault());

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