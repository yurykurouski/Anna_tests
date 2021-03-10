import {
  navigateToUrl
} from "../../routing.js";
import {
  MAX_CARDS_PER_PAGE,
  ROOT_DIV
} from "../../constants.js";
import currentUser from "../../current-user.js";
import questionsTemplate from "../../questions-template.js";
import newButton from "../../components/elements/button.js";
import newResearchCard from "../../components/research-cards.js";
import template from "../../pages-templates/cabinet/cabinet-template.js";
import pagination from "../../components/pagination.js";

function renderCabinet() {
  ROOT_DIV.innerHTML = template;

  newButton('fab', 'button', 'new-questionaire', '+', ROOT_DIV).
    addEventListener('click', () => navigateToUrl('/new'));

  const templatesByCurrUser = questionsTemplate.getTemplatesByUser(currentUser.userData.username),
    researchesWrap = ROOT_DIV.querySelector('.aw-researches');

  if (!templatesByCurrUser.length) {
    researchesWrap.innerHTML = `
      <span>Нажмите на кнопку ниже чтобы добавить.</span>
    `
  } else if (templatesByCurrUser.length > MAX_CARDS_PER_PAGE) {
    pagination(templatesByCurrUser, researchesWrap);
  } else {
    templatesByCurrUser.forEach(el => newResearchCard.cabinet(el, researchesWrap));
  }

  document.title = 'Социология > Кабинет';
  window.scrollTo(0, 0);
}

export default renderCabinet;