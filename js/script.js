import { renderPage } from "./routing.js";

renderPage();

window.addEventListener('popstate', () => {
  renderPage();
});