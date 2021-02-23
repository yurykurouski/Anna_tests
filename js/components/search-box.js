import {
  navigateToUrl
} from '../routing.js';
import questionsTemplate from '../questions-template.js';

export function launchSearchBox(event) {
  const {
    value
  } = event.target
  
  const list = document.querySelector('header #list');
  list.innerHTML = '';

  const match = questionsTemplate.getTemplateByRequest(value);

  const result = match.slice(0, 4);

  result.forEach((el) => {
    if (el.description) {
      renderOverlay(list, el.description, el.id);
    }
  });
}

function renderOverlay(parent, targetText, id) {
  const item = document.createElement('li');
  const href = document.createElement('span');

  parent.appendChild(item);
  item.appendChild(href);

  href.textContent = targetText;
  item.style.cursor = 'pointer';

  href.addEventListener('mousedown', () => navigateToUrl(`/templates/${id}`));
}