import {
  navigateToUrl
} from '../routing.js';
import { currentTheme } from '../utils.js';
import questionsTemplate from '../questions-template.js';

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
  item.setAttribute('class', `${currentTheme()}`);

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