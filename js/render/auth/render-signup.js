import {
  LOGIN_URL,
  ROOT_DIV
} from "../../constants.js";
import signUp from "../../operations/auth/sign-up.js";
import template from "../../pages-templates/Auth/sign-up.js";
import newButton from "../../components/elements/button.js";
import { navigateToUrl } from "../../routing.js";

function renderSignup() {
  ROOT_DIV.innerHTML = template;

  const msg = ROOT_DIV.querySelector('#msg');
  const form = ROOT_DIV.querySelector('form');

  newButton('contained', 'submit', '', 'Регистрация', msg);
  form.addEventListener('submit', signUp);

  const loginHref = ROOT_DIV.querySelector('#msg a');
  loginHref.addEventListener('click', (event) => {
    event.preventDefault();
    navigateToUrl(LOGIN_URL);
  });

  document.title = 'Социология > Регистрация';
}

export default renderSignup;