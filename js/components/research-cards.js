import {
  navigateToUrl
} from "../routing.js";
import modalDelete from "./modal-delete.js";
import newButton from "./elements/button.js";

class ResearchCard {
  main(el, researchesWrap) {
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
  }

  cabinet(el, researchesWrap) {
    const researchCard = document.createElement('li'),
      description = document.createElement('p'),
      info = document.createElement('span');

    researchCard.setAttribute('id', el.id);

    researchesWrap.appendChild(researchCard);
    researchCard.appendChild(description);
    researchCard.appendChild(info);

    description.textContent = el.description;

    info.textContent = `Количество вопросов: ${el.numberOfQuestions}.`;

    newButton.containedButton('button', 'go-to-anquette', 'Посмотреть анкеты', researchCard).
    addEventListener('click', () => navigateToUrl(`/cabinet/completed/${el.id}`));

    newButton.containedButton('button', 'del-anquette', 'Удалить исследование', researchCard).
    addEventListener('click', () => modalDelete(el.id));
  }
}

const newResearchCard = new ResearchCard();

export default newResearchCard;