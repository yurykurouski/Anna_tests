import {
  navigateToUrl
} from "../../routing.js";
import {
  ROOT_DIV
} from "../../constants.js";
import currentUser from "../../current-user.js";
import modalDelete from "../../components/modal-delete.js";
import questionsTemplate from "../../questions-template.js";
import template from "../../pages-templates/cabinet/cabinet-template.js";
import newButton from "../../components/elements/button.js";

function renderCabinet() {
  ROOT_DIV.innerHTML = template;

  const templatesByCurrUser = questionsTemplate.getTemplatesByUser(currentUser.userData.username),
    researchesWrap = ROOT_DIV.querySelector('.aw-researches'),
    tapMsg = ROOT_DIV.querySelector('#msg');

  if (!templatesByCurrUser.length) {
    tapMsg.style.display = 'inline';
  }

  templatesByCurrUser.forEach((el) => {
    const researchCard = document.createElement('li'),
      description = document.createElement('p'),
      info = document.createElement('span');

    researchCard.setAttribute('id', el.id)

    researchesWrap.appendChild(researchCard);
    researchCard.appendChild(description);
    researchCard.appendChild(info);
    
    info.textContent = `Количество вопросов: ${el.numberOfQuestions}.`;

    newButton.containedButton('button','go-to-anquette', 'Посмотреть анкеты', researchCard).addEventListener('click', () => navigateToUrl(`/cabinet/completed/${el.id}`));
    newButton.containedButton('button','del-anquette', 'Удалить исследование', researchCard).addEventListener('click', () => modalDelete(el.id));
  });

  newButton.containedButton('button', 'new-questionaire', 'Новое исследование', ROOT_DIV).addEventListener('click', () => navigateToUrl('/new'));
}

export default renderCabinet;