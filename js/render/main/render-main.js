import {
  navigateToUrl
} from "../../routing.js";
import {
  NEW_QUEST_URL,
  ROOT_DIV
} from "../../constants.js";
import currentUser from "../../current-user.js";
import questionsTemplate from "../../questions-template.js";
import template from "../../pages-templates/Main/main-page.js";
import popupSaveSuccesfully from "../../components/pop-up.js";

function renderMainPage() {
  ROOT_DIV.innerHTML = template

  const toNewQuestBtn = ROOT_DIV.querySelector('.new-questionaire'),
        researchesWrap = ROOT_DIV.querySelector('div > .aw-researches');

  if (!currentUser.userData) {
    toNewQuestBtn.style.display = 'none'
    const msg = toNewQuestBtn.closest('span');

    msg.innerHTML = `
      <h5><a href='/login'>Войдите</a>, чтобы добавить новое исследование.</h5>
    `
  }

  if (!questionsTemplate.templates) {
    researchesWrap.innerHTML = `
      <span>Нет доступных исследований</span>
    `
  } else {
    questionsTemplate.templates.forEach(el => {
      const researchCard = document.createElement('li'),
            description = document.createElement('p'),
            info = document.createElement('span'),
            startBtn = document.createElement('button');

      startBtn.setAttribute('class', 'pure-material-button-contained go-to-anquette');
      startBtn.setAttribute('id', el.id);
      startBtn.textContent = 'Пройти'

      researchesWrap.appendChild(researchCard);
      researchCard.appendChild(description);
      researchCard.appendChild(info);
      researchCard.appendChild(startBtn);

      description.textContent = el.description;
      info.textContent = `Количество вопросов: ${el.numberOfQuestions}. Автор: ${el.owner}`;

      startBtn.addEventListener('click', () => {
        navigateToUrl(`/templates/${el.id}`);
      });
    });
  }
  toNewQuestBtn.addEventListener('click', () => navigateToUrl(NEW_QUEST_URL));
};

export default renderMainPage;