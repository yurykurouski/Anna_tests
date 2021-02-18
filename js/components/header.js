import {
  navigateToUrl
} from "../routing.js";
import currentUser from "../current-user.js";
import logOut from "../operations/auth/log-out.js";
import template from "../pages-templates/header/header.js";
import { CABINET_URL, LOGIN_URL } from "../constants.js";


function renderHeader() {
  const header = document.querySelector('header');
  header.innerHTML = template;

  const auth = header.querySelector('#auth a'),
    main = header.querySelector('#main'),
    cabinet = header.querySelector('#cabinet a');

  main.addEventListener('click', () => navigateToUrl('/'))
  if (currentUser.userData) {
    auth.textContent = 'Выйти';
    cabinet.textContent = 'Кабинет'

    cabinet.addEventListener('click', () => navigateToUrl(CABINET_URL))
    auth.addEventListener('click', logOut);
  } else {
    auth.textContent = 'Войти';
    auth.addEventListener('click', () => navigateToUrl(LOGIN_URL));
  }
}

export default renderHeader;