import {
  navigateToUrl
} from "../../routing.js";
import {
  NEW_QUEST_URL,
  ROOT_DIV
} from "../../constants.js";
import currentUser from "../../current-user.js";
import questionsTemplate from "../../questions-template.js";
import newButton from "../../components/elements/button.js";
import template from "../../pages-templates/Main/main-page.js";
import newResearchCard from "../../components/research-cards.js";

function renderMainPage() {
  ROOT_DIV.innerHTML = template

  const toNewQuestBtn = newButton.containedButton('button', 'new-questionaire', 'Новое исследование', ROOT_DIV);

  toNewQuestBtn.addEventListener('click', () => navigateToUrl(NEW_QUEST_URL));

  const researchesWrap = ROOT_DIV.querySelector('div > .aw-researches');

  if (!currentUser.userData) {
    toNewQuestBtn.style.display = 'none'
    const msg = ROOT_DIV.querySelector('#msg');

    msg.innerHTML = `
      <h5><a href='/login'>Войдите</a>, чтобы добавить новое исследование.</h5>
    `
  }
  if (!questionsTemplate.templates.length) {
    researchesWrap.innerHTML = `
      <span>Нажмите на кнопку ниже чтобы добавить.</span>
    `
  } else {
    questionsTemplate.templates.forEach(el => newResearchCard.cabinet(el, researchesWrap));
  }
};

export default renderMainPage;