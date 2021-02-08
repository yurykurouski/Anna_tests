import { ROOT_DIV } from "../../constants.js";
import { collectUserAnquette } from "../../operations/collect-answers.js";
import template from "../../Pages template/Ready/questionnaire-presentation.js";
import questionsTemplate from "../../questions-template.js";
import renderExistingQuestions from "./render-existingQuestions.js";

//* сборка анкеты из конструктора
export function renderExsistingAnquette(id) {
  ROOT_DIV.innerHTML = template;
  
  const description = ROOT_DIV.querySelector('div p');

  description.textContent = questionsTemplate.templates[id].description;

  const additionalInformation = ROOT_DIV.querySelector('div .additional-information-anquette');

  questionsTemplate.templates[id].additionalInformation.forEach(param => {
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

  questionsTemplate.templates[id].additionalInformationExtra.forEach(param => {
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
  
  summary.textContent = `Количество вопросов: ${questionsTemplate.templates[id].numberOfQuestions}`;

  const form = ROOT_DIV.querySelector('form');

  form.addEventListener('submit', (event) => {
    collectUserAnquette(event);
    renderExistingQuestions(id);
  });
}