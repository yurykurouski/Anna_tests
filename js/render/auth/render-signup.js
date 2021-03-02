import {
  LOGIN_URL,
  ROOT_DIV
} from "../../constants.js";
import { navigateToUrl } from "../../routing.js";
import signUp from "../../operations/auth/sign-up.js";
import template from "../../pages-templates/Auth/sign-up.js";
import newButton from "../../components/elements/button.js";

function renderSignup() {
  ROOT_DIV.innerHTML = template;

  const form = ROOT_DIV.querySelector('form');
  const formWrap = form.querySelector('.form-wrap');

  newButton('contained', 'submit', '', 'Регистрация', formWrap);
  newButton('text', 'button', '', 'Войти', formWrap).
    addEventListener('click', () => navigateToUrl(LOGIN_URL));
  
  form.addEventListener('submit', signUp);

  document.title = 'Социология > Регистрация';
}

export default renderSignup;