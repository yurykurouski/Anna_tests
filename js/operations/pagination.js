import newResearchCard from "../components/research-cards.js";
import { CARDS_PAGE, MAX_CARDS_PER_PAGE, ROOT_DIV } from "../constants.js";
import { navigateToUrl } from "../routing.js";

function pagination(template, parent) {
  const paginationWrap = document.createElement('span');
  const pages = document.createElement('ol');

  paginationWrap.setAttribute('class', 'pagination-wrap light-theme');

  pages.innerHTML = `
      <li class='active'>1</li>
      <li>2</li>
    `

  let nexPageNum = 3;
  let currentPage = 1;

  paginationWrap.appendChild(pages);

  for (let i = MAX_CARDS_PER_PAGE; i <= template.length; i++) {
    if (i % (MAX_CARDS_PER_PAGE * (nexPageNum - 1) + 1) === 0) {
      const extraPage = document.createElement('li');

      extraPage.textContent = nexPageNum;
      pages.appendChild(extraPage);
      nexPageNum++;
    }
  }

  renderCards(template, parent, currentPage);
  ROOT_DIV.appendChild(paginationWrap);

  pages.addEventListener('click', (event) => {
    currentPage = parseInt(event.target.textContent);
    const prevActive = pages.querySelector('.active');
    prevActive.removeAttribute('class')

    event.target.setAttribute('class', 'active');
    renderCards(template, parent, currentPage);
  });
}

function renderCards(template, parent, currentPage) {
  const cardList = ROOT_DIV.querySelector('.aw-researches');
  cardList.innerHTML = ``;

  const prevPage = currentPage - 1;

  const actualTemplates = template.slice(prevPage * 10, currentPage * 10);

  actualTemplates.forEach(el => newResearchCard.main(el, parent));
}

export default pagination;