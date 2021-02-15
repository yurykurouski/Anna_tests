import { ROOT_DIV } from "../../constants.js";
import signUp from "../../operations/auth/sign-up.js";
import template from "../../pages-templates/Auth/sign-up.js";

function renderSignup(event) {
  ROOT_DIV.innerHTML = template;

  const form = ROOT_DIV.querySelector('form');

  form.addEventListener('submit', signUp);
}

export default renderSignup;