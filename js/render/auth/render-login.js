import {
  ROOT_DIV
} from "../../constants.js";
import login from "../../operations/auth/log-in.js";
import template from "../../pages-templates/Auth/log-in.js";
import newButton from "../../components/elements/button.js";

function renderLogin() {
  ROOT_DIV.innerHTML = template;

  const msg = ROOT_DIV.querySelector('#msg');
  const form = ROOT_DIV.querySelector('form');

  newButton.containedButton('submit', '', 'Войти', msg);
  form.addEventListener('submit', login);
}

export default renderLogin;