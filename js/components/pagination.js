import { currentTheme } from '../utils.js';
import newResearchCard from './research-cards.js';
import { CABINET_URL, INDEX_URLS, MAX_CARDS_PER_PAGE, ROOT_DIV } from '../constants.js';

function pagination(template, parent) {
  const pages = document.createElement('ol');

  let nexPageNum = 3;
  let currentPage = 1;

  pages.setAttribute('class', `pagination-wrap ${currentTheme()}`); 

  pages.innerHTML = `
      <li class='pure-material-button-text active'>1</li>
      <li class='pure-material-button-text'>2</li>
    `

  for (let i = MAX_CARDS_PER_PAGE; i <= template.length; i++) {
    if (i % (MAX_CARDS_PER_PAGE * (nexPageNum - 1) + 1) === 0) {
      const extraPage = document.createElement('li');
      extraPage.setAttribute('class', 'pure-material-button-text');

      extraPage.textContent = nexPageNum;
      pages.appendChild(extraPage);
      nexPageNum++;
    }
  }

  renderCards(template, parent, currentPage);
  ROOT_DIV.appendChild(pages);

  pages.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      currentPage = parseInt(event.target.textContent);
      const prevActive = pages.querySelector('.active');
      prevActive.classList.remove('active');

      event.target.classList.add('active');

      renderCards(template, parent, currentPage);
    }
  });
}

export function renderCards(template, parent, currentPage) {
  const cardList = ROOT_DIV.querySelector('.aw-researches');
  const { pathname: currentUrl } = window.location;

  cardList.innerHTML = ``;

  const prevPage = currentPage - 1;

  const actualTemplates = template.slice(prevPage * 10, currentPage * 10);

  if (INDEX_URLS.includes(currentUrl)) {
    actualTemplates.forEach(el => newResearchCard.main(el, parent));
  } else if (currentUrl === CABINET_URL) {
    actualTemplates.forEach(el => newResearchCard.cabinet(el, parent));
  }
}

export default pagination;