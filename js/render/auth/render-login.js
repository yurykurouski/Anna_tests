import { ROOT_DIV } from "../../constants.js";
import login from "../../operations/auth/log-in.js";
import template from "../../Pages template/Auth/log-in.js";

function renderLogin() {
  ROOT_DIV.innerHTML = template;

  const form = ROOT_DIV.querySelector('form');

  form.addEventListener('submit', login);
}

export default renderLogin;