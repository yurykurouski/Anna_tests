import {
  navigateToUrl
} from '../routing.js';
import questionsTemplate from '../questions-template.js';
import storageService from '../storage-service.js';

export function launchSearchBox(event) {
  const {
    value
  } = event.target;

  const list = document.querySelector('header #list');
  list.innerHTML = '';

  const match = questionsTemplate.getTemplateByRequest(value);

  const result = match.slice(0, 4);

  result.forEach((el) => {
    if (el.templateName) {
      renderOverlay(list, el.templateName, el.id, el.owner);
    }
  });
}

function renderOverlay(parent, targetText, id, author) {
  const item = document.createElement('li');
  if (storageService.get('Current theme') === 'Dark') {
    item.setAttribute('class', 'dark-theme');
  } else item.setAttribute('class', 'light-theme');

  parent.appendChild(item);

  if (targetText.length > 150) {
    targetText = `${targetText.substring(0, 150)}...`
  }

  item.innerHTML = `
    <i class="material-icons search">search</i><b>${targetText}</b><br>
    <i>Автор: <u>${author}</u></i>
  `;

  item.style.cursor = 'pointer';

  item.addEventListener('mousedown', () => navigateToUrl(`/templates/${id}`));
}