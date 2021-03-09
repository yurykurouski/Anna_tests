import {
  navigateToUrl
} from "../../routing.js";
import {
  LOGIN_URL,
  MAX_CARDS_PER_PAGE,
  NEW_QUEST_URL,
  ROOT_DIV
} from "../../constants.js";
import currentUser from "../../current-user.js";
import questionsTemplate from "../../questions-template.js";
import newButton from "../../components/elements/button.js";
import template from "../../pages-templates/Main/main-page.js";
import newResearchCard from "../../components/research-cards.js";
import pagination from "../../components/pagination.js";

function renderMainPage() {
  ROOT_DIV.innerHTML = template;

  const toNewQuestBtn = newButton('contained', 'button', 'new-questionaire', 'Новое исследование', ROOT_DIV);

  toNewQuestBtn.addEventListener('click', () => navigateToUrl(NEW_QUEST_URL));

  const researchesWrap = ROOT_DIV.querySelector('div > .aw-researches');

  if (!currentUser.userData) {
    toNewQuestBtn.style.display = 'none'
    const msg = ROOT_DIV.querySelector('#msg');

    msg.innerHTML = `
      <h5><a href=''>Войдите</a>, чтобы добавить новое исследование.</h5>
    `
    const loginHref = msg.querySelector('a');
    loginHref.addEventListener('click', (event) => {
      event.preventDefault();
      navigateToUrl(LOGIN_URL);
    });
  }
  if (!questionsTemplate.templates.length) {
    researchesWrap.innerHTML = `
      <span>Нажмите на кнопку ниже чтобы добавить.</span>
    `
  } else if (questionsTemplate.templates.length > MAX_CARDS_PER_PAGE){
    pagination(questionsTemplate.templates, researchesWrap);
  } else {
    questionsTemplate.templates.forEach(el => newResearchCard.main(el, researchesWrap));
  }

 
  document.title = 'Социология > Главная';
  window.scrollTo(0, 0);
};

export default renderMainPage;