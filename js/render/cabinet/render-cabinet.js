import { ROOT_DIV } from "../../constants.js";
import currentUser from "../../current-user.js";
import template from "../../Pages template/cabinet/cabinet-template.js";
import questionsTemplate from "../../questions-template.js";

function renderCabinet() {
  ROOT_DIV.innerHTML = template;

  const templatesByCurrUser = questionsTemplate.getTemplatesByUser(currentUser.userData.username);
  const researchesWrap = ROOT_DIV.querySelector('div > .aw-researches');
console.log(templatesByCurrUser)
  templatesByCurrUser.forEach((el, index) => {
    const researchCard = document.createElement('li');
    const description = document.createElement('p');
    const info = document.createElement('span');
    const startBtn = document.createElement('button');

    startBtn.setAttribute('class', 'pure-material-button-contained go-to-anquette');
    startBtn.setAttribute('id', index);
    startBtn.textContent = 'Посмотреть анкеты'

    researchesWrap.appendChild(researchCard);
    researchCard.appendChild(description);
    researchCard.appendChild(info);
    researchCard.appendChild(startBtn);

    description.textContent = el.description;
    info.textContent = `Количество вопросов: ${el.numberOfQuestions}.`;
  })
}

export default renderCabinet;