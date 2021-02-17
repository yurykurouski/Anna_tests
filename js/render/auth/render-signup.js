import { ROOT_DIV } from "../../constants.js";
import signUp from "../../operations/auth/sign-up.js";
import template from "../../pages-templates/Auth/sign-up.js";
import newButton from "../../components/elements/button.js";

function renderSignup() {
  ROOT_DIV.innerHTML = template;

  const msg = ROOT_DIV.querySelector('#msg');
  const form = ROOT_DIV.querySelector('form');

  newButton.containedButton('submit', '', 'Регистрация', msg);
  form.addEventListener('submit', signUp);
}

export default renderSignup;