import {
  navigateToUrl
} from "../routing.js";
import modalDelete from "./modal-delete.js";
import newButton from "./elements/button.js";

class ResearchCard {
  main(el, researchesWrap) {
    const researchCard = document.createElement('li'),
      cardWrap = document.createElement('div'),
      description = document.createElement('p'),
      span = document.createElement('span'),
      info = document.createElement('span');

    cardWrap.setAttribute('class', 'card main')

    researchesWrap.appendChild(researchCard);
    researchCard.appendChild(cardWrap);
    cardWrap.appendChild(description);
    cardWrap.appendChild(span);
    span.appendChild(info);

    description.textContent = el.description;

    info.textContent = `Количество вопросов: ${el.numberOfQuestions}. Автор: ${el.owner}`;

    newButton('contained', 'button', 'go-to-anquette', 'Пройти', span).
    addEventListener('click', () => {
      navigateToUrl(`/templates/${el.id}`);
    });
  }

  cabinet(el, researchesWrap) {
    const researchCard = document.createElement('li'),
      cardWrap = document.createElement('div'),
      description = document.createElement('p'),
      span = document.createElement('span'),
      info = document.createElement('span');

    cardWrap.setAttribute('class', 'card cabinet');
    researchCard.setAttribute('id', el.id);

    researchesWrap.appendChild(researchCard);
    researchCard.appendChild(cardWrap);
    cardWrap.appendChild(description);
    cardWrap.appendChild(span);
    span.appendChild(info);

    description.textContent = el.description;

    info.textContent = `Количество вопросов: ${el.numberOfQuestions}.`;

    newButton('contained', 'button', 'go-to-anquette', 'Посмотреть анкеты', span).
    addEventListener('click', () => navigateToUrl(`/cabinet/completed/${el.id}`));

    newButton('contained', 'button', 'del-anquette', 'Удалить', span).
    addEventListener('click', () => modalDelete(el.id));
  }
}

const newResearchCard = new ResearchCard();

export default newResearchCard;