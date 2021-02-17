import {
  navigateToUrl
} from "../../routing.js";
import {
  ROOT_DIV
} from "../../constants.js";
import currentUser from "../../current-user.js";
import questionsTemplate from "../../questions-template.js";
import newButton from "../../components/elements/button.js";
import newResearchCard from "../../components/research-cards.js";
import template from "../../pages-templates/cabinet/cabinet-template.js";

function renderCabinet() {
  ROOT_DIV.innerHTML = template;

  const templatesByCurrUser = questionsTemplate.getTemplatesByUser(currentUser.userData.username),
    researchesWrap = ROOT_DIV.querySelector('.aw-researches');

  if (!templatesByCurrUser.length) {
    researchesWrap.innerHTML = `
      <span>Нажмите на кнопку ниже чтобы добавить.</span>
    `
  }

  templatesByCurrUser.forEach((el) => newResearchCard.cabinet(el, researchesWrap));

  newButton.containedButton('button', 'new-questionaire', 'Новое исследование', ROOT_DIV).
  addEventListener('click', () => navigateToUrl('/new'));
}

export default renderCabinet;