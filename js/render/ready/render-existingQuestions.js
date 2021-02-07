import { ROOT_DIV } from "../../constants.js";
import { collectUserAnswers } from "../../operations/collect-answers.js";
import template from "../../Pages template/Ready/questions-presentation.js";
import questionsList from "../../questions-list.js";
import questionsTemplate from "../../questions-template.js";

function renderExistingQuestions() {
  ROOT_DIV.innerHTML = template;
  const questionsWrapper = ROOT_DIV.querySelector('.questions-wrapper');

  questionsList.list.forEach((qstn, id) => {
    const wrap = document.createElement('div');
    wrap.setAttribute('class', 'question-wrap');

    wrap.innerHTML = `
    <h4>Вопрос №${id+1}</h4>
    <p>${qstn}</p>
    <h4>Ваш ответ:</h4>
    ${generateAnswerTypeTemplate(questionsTemplate, id)}
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
        <input type="radio" name="radio${id + 1}" value='0'>
        <span>Нет</span>
      </label>
      <label class="pure-material-radio">
        <input type="radio" name="radio${id + 1}" value='1'>
        <span>Да</span>
      </label>
    `
    return template;
  }

  if (questionsTemplate.template.possibleAnswersType === 'range') {
    let template = '';
    for (let i = 0; i < questionsTemplate.template.ifRange.length; i++){
      const part = `
        <label class="pure-material-radio">
          <input type="radio" name="radio${id + 1}" value='${i + 1}'>
          <span>${questionsTemplate.template.ifRange[i]}</span>
        </label>
      `
      template = template + part;
    }
    return template;
  }
}

export default renderExistingQuestions;