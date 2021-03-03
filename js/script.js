import { renderPage } from "./routing.js";
import storageService from "./storage-service.js";

renderPage();

window.addEventListener('popstate', () => {
  renderPage();
});

if (!storageService.get('Current theme')) {
  storageService.set('Current theme', 'Light');
}