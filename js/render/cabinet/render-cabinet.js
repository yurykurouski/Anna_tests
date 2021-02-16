import {
  navigateToUrl
} from "../../routing.js";
import {
  ROOT_DIV
} from "../../constants.js";
import currentUser from "../../current-user.js";
import questionsTemplate from "../../questions-template.js";
import template from "../../pages-templates/cabinet/cabinet-template.js";
import modalDelete from "../../components/modal-delete.js";

function renderCabinet() {
  ROOT_DIV.innerHTML = template;

  const templatesByCurrUser = questionsTemplate.getTemplatesByUser(currentUser.userData.username),
    researchesWrap = ROOT_DIV.querySelector('div > .aw-researches'),
    newQuestBtn = ROOT_DIV.querySelector('.new-questionaire');
  if (!templatesByCurrUser.length) {
    researchesWrap.innerHTML = `
      <span>Нажмите на кнопку ниже чтобы добавить.</span>
    `
  }

  templatesByCurrUser.forEach((el) => {
    const researchCard = document.createElement('li'),
      description = document.createElement('p'),
      info = document.createElement('span'),
      startBtn = document.createElement('button'),
      delBtn = document.createElement('button');

    startBtn.setAttribute('class', 'pure-material-button-contained go-to-anquette');
    delBtn.setAttribute('class', 'pure-material-button-contained del-anquette');

    startBtn.textContent = 'Посмотреть анкеты';
    delBtn.textContent = 'Удалить исследование';

    researchesWrap.appendChild(researchCard);
    researchCard.appendChild(description);
    researchCard.appendChild(info);
    researchCard.appendChild(startBtn);
    researchCard.appendChild(delBtn);

    description.textContent = el.description;
    info.textContent = `Количество вопросов: ${el.numberOfQuestions}.`;

    startBtn.addEventListener('click', () => navigateToUrl(`/cabinet/completed/${el.id}`));
    delBtn.addEventListener('click', modalDelete);
  });

  newQuestBtn.addEventListener('click', () => navigateToUrl('/new'));
}

export default renderCabinet;