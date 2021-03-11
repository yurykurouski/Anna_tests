import {
  navigateToUrl
} from '../routing.js';
import { currentTheme } from '../utils.js';
import modalDelete from './modal-delete.js';
import newButton from './elements/button.js';

class ResearchCard {
  main(el, researchesWrap) {
    const researchCard = document.createElement('li'),
      cardWrap = document.createElement('div'),
      name = document.createElement('p'),
      span = document.createElement('span'),
      info = document.createElement('span');

    cardWrap.setAttribute('class', `card main ${currentTheme()}`);

    researchesWrap.appendChild(researchCard);
    researchCard.appendChild(cardWrap);
    cardWrap.appendChild(name);
    cardWrap.appendChild(span);
    span.appendChild(info);

    name.textContent = el.templateName;

    info.textContent = `Количество вопросов: ${el.numberOfQuestions}. Автор: ${el.owner}`;

    newButton('contained', 'button', 'go-to-anquette', 'Пройти', span).
    addEventListener('click', () => {
      navigateToUrl(`/templates/${el.id}`);
    });
  }

  cabinet(el, researchesWrap) {
    const researchCard = document.createElement('li'),
      cardWrap = document.createElement('div'),
      name = document.createElement('p'),
      span = document.createElement('span'),
      info = document.createElement('span');

    cardWrap.setAttribute('class', `card cabinet ${currentTheme()}`);
    researchCard.setAttribute('id', el.id);

    researchesWrap.appendChild(researchCard);
    researchCard.appendChild(cardWrap);
    cardWrap.appendChild(name);
    cardWrap.appendChild(span);
    span.appendChild(info);

    name.textContent = el.templateName;

    info.textContent = `Количество вопросов: ${el.numberOfQuestions}.`;

    newButton('contained', 'button', 'go-to-anquette', 'Посмотреть анкеты', span).
    addEventListener('click', () => navigateToUrl(`/cabinet/completed/${el.id}`));

    newButton('contained', 'button', 'del-anquette', 'Удалить', span).
    addEventListener('click', () => modalDelete(el.id));
  }
}

const newResearchCard = new ResearchCard();

export default newResearchCard;