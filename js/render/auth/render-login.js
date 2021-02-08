import { ROOT_DIV } from "../../constants.js";
import template from "../../Pages template/Auth/log-in.js";

function renderLogin(event) {
  ROOT_DIV.innerHTML = template;

}

export default renderLogin;