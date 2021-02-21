import {
  ROOT_DIV
} from "../../constants.js";
import {
  collectUserAnswers
} from "../../operations/collect-answers.js";
import questionsTemplate from "../../questions-template.js";
import template from "../../pages-templates/Ready/questions-presentation.js";
import popupSaveSuccesfully from "../../components/pop-up.js";
import { navigateToUrl } from "../../routing.js";

function renderExistingQuestions(currTemplate) {
  ROOT_DIV.innerHTML = template;
  const questionsWrapper = ROOT_DIV.querySelector('.questions-wrapper');

  const currQuestionsTemplate = questionsTemplate.getQuestionsTemplateById(currTemplate.id);

  currQuestionsTemplate.questions.forEach((qstn, index) => {
    const wrap = document.createElement('div');
    wrap.setAttribute('class', 'question-wrap');

    wrap.innerHTML = `
    <h4>Вопрос №${currTemplate.id}</h4>
    <p>${qstn}</p>
    <h4>Ваш ответ:</h4>
    ${generateAnswerTypeTemplate(currTemplate, index, currTemplate.id)}
    `

    questionsWrapper.appendChild(wrap);
  });

  const form = ROOT_DIV.querySelector('form');

  form.addEventListener('submit', () => {
    popupSaveSuccesfully();
    collectUserAnswers(event, currTemplate.id);
    setTimeout(() => {
      navigateToUrl('/');
    }, 1000);
  });
  window.scrollTo(0, 0);
}

function generateAnswerTypeTemplate(currTemplate, index, id) {
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
  window.scrollTo(0, 0);
}

export default renderExistingQuestions;