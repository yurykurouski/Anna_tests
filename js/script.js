import { ROOT_DIV } from "./constants.js";
import { renderPage } from "./routing.js";
import storageService from "./storage-service.js";
import changeTheme from "./operations/changeTheme.js";

if (!storageService.get('Current theme')) {
  storageService.set('Current theme', 'Light');
}

renderPage();

changeTheme(storageService.get('Current theme'));

window.addEventListener('popstate', () => {
  renderPage();
});

const observer = new MutationObserver(() => {
  const toggl = document.querySelector('#theme-toggler');
  console.log(toggl);
  changeTheme(storageService.get('Current theme'));
});

observer.observe(ROOT_DIV, {
  subtree: true,
  attributes: true
});