import questionsTemplate from "../questions-template.js";

export function launchSearchBox(event) {
  const {
    value
  } = event.target
  const list = document.querySelector('header #list')
  list.innerHTML = ''

  if (value) {
    event.target.style.width = '300px';
  } else {
    event.target.style.width = '1px';
    return
  }

  const match = questionsTemplate.templates.filter((template) => {
    return template.description.toUpperCase().includes(value.toUpperCase());
  });

  match.slice(0, 4);

  for (let i = 0; i < match.length; i++) {
    if (match[i].description) {
      renderOverlay(list, match[i].description);
    }
  }
}

function renderOverlay(parent, targetText) {
  const item = document.createElement('li');
  const href = document.createElement('span');

  parent.appendChild(item);
  item.appendChild(href);

  href.textContent = targetText;
}