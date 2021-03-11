import {
  navigateToUrl
} from '../routing.js';
import { currentTheme } from '../utils.js';
import modalDelete from './modal-delete.js';
import newButton from './elements/button.js';

class ResearchCard {
  main(el, researchesWrap) {
    const researchCard = document.createElement('li');

    researchCard.innerHTML = `
      <div class='card main ${currentTheme()}'>
        <p>${el.templateName}</p>
        <span class='action-wrap'>
          <span>Количество вопросов: ${el.numberOfQuestions}. Автор: ${el.owner}</span>
        </span>
      </div>
      `

    newButton('contained', 'button', 'go-to-anquette', 'Пройти', researchCard.querySelector('.action-wrap')).
      addEventListener('click', () => {
        navigateToUrl(`/templates/${el.id}`);
      });

    researchesWrap.appendChild(researchCard)
  }

  cabinet(el, researchesWrap) {
    const researchCard = document.createElement('li');
    researchCard.setAttribute('id', el.id);

    researchCard.innerHTML = `
      <div class='card cabinet ${currentTheme()}'>
        <p>${el.templateName}</p>
        <span class='action-wrap'>
          <span>Количество вопросов: ${el.numberOfQuestions}.</span>
        </span>
      </div>
      `

    newButton('contained', 'button', 'go-to-anquette', 'Посмотреть анкеты', researchCard.querySelector('.action-wrap')).
      addEventListener('click', () => navigateToUrl(`/cabinet/completed/${el.id}`));

    newButton('contained', 'button', 'del-anquette', 'Удалить', researchCard.querySelector('.action-wrap')).
      addEventListener('click', () => modalDelete(el.id));

    researchesWrap.appendChild(researchCard);
  }
}

const newResearchCard = new ResearchCard();

export default newResearchCard;