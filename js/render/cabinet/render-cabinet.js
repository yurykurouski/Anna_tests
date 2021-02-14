import { ROOT_DIV } from "../../constants.js";
import currentUser from "../../current-user.js";
import template from "../../Pages template/cabinet/cabinet-template.js";
import questionsTemplate from "../../questions-template.js";
import { navigateToUrl } from "../../routing.js";

function renderCabinet() {
  ROOT_DIV.innerHTML = template;

  const templatesByCurrUser = questionsTemplate.getTemplatesByUser(currentUser.userData.username);
  const researchesWrap = ROOT_DIV.querySelector('div > .aw-researches');

  templatesByCurrUser.forEach((el) => {
    const researchCard = document.createElement('li');
    const description = document.createElement('p');
    const info = document.createElement('span');
    const startBtn = document.createElement('button');

    startBtn.setAttribute('class', 'pure-material-button-contained go-to-anquette');
    startBtn.textContent = 'Посмотреть анкеты';

    researchesWrap.appendChild(researchCard);
    researchCard.appendChild(description);
    researchCard.appendChild(info);
    researchCard.appendChild(startBtn);

    description.textContent = el.description;
    info.textContent = `Количество вопросов: ${el.numberOfQuestions}.`;

    startBtn.addEventListener('click', () => navigateToUrl(`/cabinet/completed/${el.id}`));
  });
}

export default renderCabinet;