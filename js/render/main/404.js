import { ROOT_DIV } from "../../constants.js";
import template404 from "../../pages-templates/Main/404.js";

function notFound() {
  ROOT_DIV.innerHTML = template404;
}

export default notFound;