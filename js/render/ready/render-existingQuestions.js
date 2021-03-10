import {
  ROOT_DIV
} from "../../constants.js";
import {
  collectUserAnswers
} from "../../operations/collect-answers.js";
import { currentTheme } from "../../utils.js";
import { navigateToUrl } from "../../routing.js";
import popupMessage from "../../components/pop-up.js";
import questionsTemplate from "../../questions-template.js";
import template from "../../pages-templates/Ready/questions-presentation.js";

function renderExistingQuestions(currTemplate) {

  ROOT_DIV.innerHTML = template;
  const questionsWrapper = ROOT_DIV.querySelector('.questions-wrapper');

  const currQuestionsTemplate = questionsTemplate.getQuestionsTemplateById(currTemplate.id);
  const questionsNum = currQuestionsTemplate.numberOfQuestions;

  currQuestionsTemplate.questions.forEach((qstn, index) => {
    const wrap = document.createElement('div');
    wrap.setAttribute('class', 'question-wrap');

    wrap.innerHTML = `
      <h4>Вопрос №${index + 1}:</h4>
      <div id='userAnswers-${index}' class='card ${currentTheme()}'>
        <p>${qstn}</p>
        <div class='answer-wrap'>
          <h5>Ваш ответ:</h5>
          ${generateAnswerTypeTemplate(currTemplate, index)}
        </div>
      </div>
    `

    questionsWrapper.appendChild(wrap);
  });

  const form = ROOT_DIV.querySelector('form');

  form.addEventListener('submit', () => {
    collectUserAnswers(event, currTemplate.id);
  });

  document.title = `Социология > Всего вопросов - ${questionsNum}`;
  window.scrollTo(0, 0);
}

function generateAnswerTypeTemplate(currTemplate, index) {
  if (currTemplate.possibleAnswersType === 'boolean') {
    const template = `
      <label class="pure-material-radio">
        <input type="radio" name="radio${index + 1}" value='0'>
        <span>Нет</span>
      </label>
      <label class="pure-material-radio">
        <input type="radio" name="radio${index + 1}" value='1'>
        <span>Да</span>
      </label>
    `
    return template;
  }

  if (currTemplate.possibleAnswersType === 'range') {
    let template = '';
    for (let i = 0; i < currTemplate.ifRange.length; i++) {
      const part = `
        <label class="pure-material-radio">
          <input type="radio" name="radio${index + 1}" value='${i + 1}'>
          <span>${currTemplate.ifRange[i]}</span>
        </label>
      `
      template = template + part;
    }
    return template;
  }
}

export default renderExistingQuestions;