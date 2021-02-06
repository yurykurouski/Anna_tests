import { ROOT_DIV } from "../../constants.js";
import { collectUserAnswers } from "../../operations/collect-answers.js";
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

  const form = ROOT_DIV.querySelector('form');

  form.addEventListener('submit', collectUserAnswers);
}

function generateAnswerTypeTemplate(questionsTemplate, id) {
  if (questionsTemplate.template.possibleAnswersType === 'boolean') {
    const template = `
      <label class="pure-material-radio">
        <input type="radio" name="radio${id}" value='1'>
        <span>Да</span>
      </label>
      <label class="pure-material-radio">
        <input type="radio" name="radio${id}" value='0'>
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
        Скорее нет<input type="range" min="1" max="5">Скорее да
      </span>
    </label>
    `

    return template;
  }
}

export default renderExistingQuestions;