import { ROOT_DIV } from "../../constants.js";
import template from "../../Pages template/Ready/questions-presentation.js";
import questionsList from "../../questions-list.js";
import questionsTemplate from "../../questions-template.js";

function renderExistingQuestions() {
  ROOT_DIV.innerHTML = template;
  const questionsWrapper = ROOT_DIV.querySelector('.questions-wrapper');

  questionsList.list.forEach(qstn => {
    const wrap = document.createElement('div');
    wrap.setAttribute('class', 'question-wrap');

    wrap.innerHTML = `
    <h4>Вопрос №${qstn.id}</h4>
    <p>${qstn.text}</p>
    <h4>Ваш ответ:</h4>
    ${generateAnswerTypeTemplate(questionsTemplate, qstn.id)}
    `

    questionsWrapper.appendChild(wrap);
  });

  const saveAnswersBtn = ROOT_DIV.querySelector('.save-answers');
}

function generateAnswerTypeTemplate(questionsTemplate, id) {
  if (questionsTemplate.template.possibleAnswersType === 'boolean') {
    const template = `
      <label class="pure-material-radio">
        <input type="radio" name="radio${id}">
        <span>Да</span>
      </label>
      <label class="pure-material-radio">
        <input type="radio" name="radio${id}">
        <span>Нет</span>
      </label>
    `
    return template;
  }

//! добавить индикацию значения на range
  if (questionsTemplate.template.possibleAnswersType === 'range') {
    const template = `
    <label class="pure-material-slider">
    <span>
      1<input type="range" min="1" max="10">10
    </span>
    </label>
    `

    return template;
  }

  //! уточнить
  if (questionsTemplate.template.possibleAnswersType === 'rating') {
    const template = `
    <p>Уточнить у Ани, что с оценкой</p> 
    `

    return template;
  }
}

export default renderExistingQuestions;