import { ROOT_DIV } from "../../constants.js";
import questionsTemplate from "../../questions-template.js";
import renderExistingQuestions from "./render-existingQuestions.js";
import { collectUserAnquette } from "../../operations/collect-answers.js";
import template from "../../pages-templates/Ready/questionnaire-presentation.js";
import popupSaveSuccesfully from "../../components/pop-up.js";

//* сборка анкеты из конструктора
export function renderExsistingAnquette(id) {
  ROOT_DIV.innerHTML = template;
  
  const description = ROOT_DIV.querySelector('div p');

  const currTemplate = questionsTemplate.getTemplateById(id)

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

  const firstInput = ROOT_DIV.querySelector('input');

  if (firstInput) firstInput.focus();

  const summary = ROOT_DIV.querySelector('.summary');
  
  summary.textContent = `Количество вопросов: ${currTemplate.numberOfQuestions}`;

  const form = ROOT_DIV.querySelector('form');

  form.addEventListener('submit', () => {
    popupSaveSuccesfully();
    collectUserAnquette(event, id);
    renderExistingQuestions(currTemplate);
  });
}