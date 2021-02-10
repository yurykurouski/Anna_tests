import { ROOT_DIV } from "../../constants.js";
import { collectUserAnquette } from "../../operations/collect-answers.js";
import template from "../../Pages template/Ready/questionnaire-presentation.js";
import questionsTemplate from "../../questions-template.js";
import { navigateToUrl } from "../../routing.js";
import { getIdByUrl } from "../../utils.js";
import renderExistingQuestions from "./render-existingQuestions.js";

//* сборка анкеты из конструктора
export function renderExsistingAnquette(id) {
  ROOT_DIV.innerHTML = template;
  
  const description = ROOT_DIV.querySelector('div p');

  const currTemplate = questionsTemplate.templates.find(template => template.id === id);

  description.textContent = currTemplate.description;

  const additionalInformation = ROOT_DIV.querySelector('div .additional-information-anquette');

  currTemplate.additionalInformation.forEach(param => {
    const wrap = document.createElement('div');
    wrap.setAttribute('class', 'additional-wrap');

    wrap.innerHTML = `
      <h4 class='additional-header'>${param}:</h4>

      <label class="pure-material-textfield-outlined">
        <input name='additional-input' placeholder=' '>
        <span>Введите...</span>
      </label>
    `
    additionalInformation.appendChild(wrap);
  });

  const additionalExtra = ROOT_DIV.querySelector('div .additional-extra');

  //!здесь генерит пустой span, потому что есть пустой элемент
  currTemplate.additionalInformationExtra.forEach(param => {
    const wrap = document.createElement('div');
    wrap.setAttribute('class', 'additional-extra-wrap');

    wrap.innerHTML = `
      <h4 class='additional-header'>${param}:</h4>

      <label class="pure-material-textfield-outlined">
        <input name='additional-input' placeholder=' '>
        <span>Введите...</span>
      </label>
    `
    additionalExtra.appendChild(wrap);
  });

  const summary = ROOT_DIV.querySelector('.summary');
  
  summary.textContent = `Количество вопросов: ${currTemplate.numberOfQuestions}`;

  const form = ROOT_DIV.querySelector('form');

  form.addEventListener('submit', () => {
    collectUserAnquette(event, id);
    renderExistingQuestions(currTemplate);
  });

}