import {
  REGISTRATION_URL,
  ROOT_DIV
} from "../../constants.js";
import { navigateToUrl } from "../../routing.js";
import login from "../../operations/auth/log-in.js";
import template from "../../pages-templates/Auth/log-in.js";
import newButton from "../../components/elements/button.js";

function renderLogin() {
  ROOT_DIV.innerHTML = template;

  const form = ROOT_DIV.querySelector('form');
  const formWrap = form.querySelector('.form-wrap')

  newButton('contained', 'submit', '', 'Войти', formWrap);
  newButton('text', 'button', '', 'Регистрация', formWrap).
    addEventListener('click', () => navigateToUrl(REGISTRATION_URL));
  
  form.addEventListener('submit', login);

  document.title = 'Социология > Войти на сайт';
}

export default renderLogin;