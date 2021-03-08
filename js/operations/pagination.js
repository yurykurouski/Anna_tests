import { MAX_CARDS_PER_PAGE } from "../constants.js";

function pagination(template) {
  if (template.length > MAX_CARDS_PER_PAGE) {
    const paginationWrap = document.createElement('span');
    const pages = document.createElement('ol');
    

    paginationWrap.setAttribute('class', 'pagination-wrap light-theme');

    pages.innerHTML = `
      <li>1</li>
      <li>2</li>
    `

    let nexPageNum = 3;

    paginationWrap.appendChild(pages)

    for (let i = MAX_CARDS_PER_PAGE; i <= template.length; i++){
      if (i % (MAX_CARDS_PER_PAGE * (nexPageNum - 1) + 1) === 0) {
        const extraPage = document.createElement('li');

        extraPage.textContent = nexPageNum;
        pages.appendChild(extraPage);
        nexPageNum ++;
      }
    }
    return pages;
  }
  
}

export default pagination;