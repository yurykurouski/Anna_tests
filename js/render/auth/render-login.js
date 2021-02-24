import {
  REGISTRATION_URL,
  ROOT_DIV
} from "../../constants.js";
import login from "../../operations/auth/log-in.js";
import template from "../../pages-templates/Auth/log-in.js";
import newButton from "../../components/elements/button.js";
import { navigateToUrl } from "../../routing.js";

function renderLogin() {
  ROOT_DIV.innerHTML = template;

  const msg = ROOT_DIV.querySelector('#msg');
  const form = ROOT_DIV.querySelector('form');

  newButton('contained', 'submit', '', 'Войти', msg);
  form.addEventListener('submit', login);

  const signUpHref = ROOT_DIV.querySelector('#msg a');
  signUpHref.addEventListener('click', (event) => {
    event.preventDefault();
    navigateToUrl(REGISTRATION_URL);
  });
}

export default renderLogin;