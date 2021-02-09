import {
  NEW_QUEST_URL,
  ROOT_DIV
} from "../../constants.js";
import currentUser from "../../current-user.js";
import template from "../../Pages template/Main/main-page.js";
import {
  renderExsistingAnquette
} from "../../render/ready/render-exsistingAnquette.js";
import { navigateToUrl } from "../../routing.js";
import storageService from "../../storage-service.js";

function renderMainPage() {
  ROOT_DIV.innerHTML = template
  const toNewQuestBtn = ROOT_DIV.querySelector('.new-questionaire');
  const researchesWrap = ROOT_DIV.querySelector('div > .aw-researches');

  const templates = JSON.parse(storageService.get('SavedQuestionsTemplate'));

  if (!currentUser.userData) {
    toNewQuestBtn.style.display = 'none'
    const msg = toNewQuestBtn.closest('span');

    msg.innerHTML = `
      <h5><a href='/login'>Войдите</a>, чтобы добавить новое исследование.</h5>
    `
  }

  if (!templates) {
    researchesWrap.innerHTML = `
      <span>Нет доступных исследований</span>
    `
  } else {
    templates.forEach((el, index) => {
      const researchCard = document.createElement('li');
      const description = document.createElement('p');
      const info = document.createElement('span');
      const startBtn = document.createElement('button');

      startBtn.setAttribute('class', 'pure-material-button-contained go-to-anquette');
      startBtn.setAttribute('id', index);
      startBtn.textContent = 'Пройти'

      researchesWrap.appendChild(researchCard);
      researchCard.appendChild(description);
      researchCard.appendChild(info);
      researchCard.appendChild(startBtn);

      description.textContent = el.description;
      info.textContent = `Количество вопросов: ${el.numberOfQuestions}. Автор: (Сюда автора)`;

      startBtn.addEventListener('click', () => renderExsistingAnquette(index));
    })
  }

  toNewQuestBtn.addEventListener('click', () => navigateToUrl(NEW_QUEST_URL));
};

export default renderMainPage;