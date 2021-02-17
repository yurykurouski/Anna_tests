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

function renderMainPage() {
  ROOT_DIV.innerHTML = template

  const toNewQuestBtn = newButton.containedButton('button', 'new-questionaire', 'Новое исследование', ROOT_DIV);

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
    questionsTemplate.templates.forEach(el => {
      const researchCard = document.createElement('li'),
        description = document.createElement('p'),
        info = document.createElement('span');

      researchesWrap.appendChild(researchCard);
      researchCard.appendChild(description);
      researchCard.appendChild(info);

      description.textContent = el.description;
      info.textContent = `Количество вопросов: ${el.numberOfQuestions}. Автор: ${el.owner}`;

      newButton.containedButton('button', 'go-to-anquette', 'Пройти', researchCard).
      addEventListener('click', () => {
        navigateToUrl(`/templates/${el.id}`);
      });
    });
  }
  toNewQuestBtn.addEventListener('click', () => navigateToUrl(NEW_QUEST_URL));
};

export default renderMainPage;