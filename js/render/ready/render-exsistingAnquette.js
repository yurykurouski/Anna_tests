import { ROOT_DIV } from "../../constants.js";
import questionsTemplate from "../../questions-template.js";
import { collectUserAnquette } from "../../operations/collect-answers.js";
import template from "../../pages-templates/Ready/questionnaire-presentation.js";

//* сборка анкеты из конструктора
export function renderExsistingAnquette(id) {
  ROOT_DIV.innerHTML = template;

  const currTemplate = questionsTemplate.getTemplateById(id);

  const description = ROOT_DIV.querySelector('p.template-description');
  const name = ROOT_DIV.querySelector('p.template-name');

  description.textContent = currTemplate.description;
  name.textContent = currTemplate.templateName;

  const userInformation = ROOT_DIV.querySelector('div .additional-information-anquette');
  const userInformationWrap = ROOT_DIV.querySelector('#additional-information-wrap');

  userInformationWrap.style.display = 'none';

  if (currTemplate.userInformation.length > 0) {
    userInformationWrap.style.display = 'block';

    currTemplate.userInformation.forEach((param, index) => {
      const wrap = document.createElement('div');
      wrap.setAttribute('class', 'additional-wrap');

      wrap.innerHTML = `
      <h4 class='additional-header'>${param}:</h4>

      <label id='userInformation-${index}' class="pure-material-textfield-outlined">
        <input name='additional-input' placeholder=' '>
        <span>Введите...</span>
      </label>
    `
      userInformation.appendChild(wrap);
    });
  }

  const firstInput = ROOT_DIV.querySelector('input');

  if (firstInput) firstInput.focus();

  const summary = ROOT_DIV.querySelector('.summary');

  summary.textContent = `Количество вопросов: ${currTemplate.numberOfQuestions}`;

  const form = ROOT_DIV.querySelector('form');

  form.addEventListener('submit', () => {
    collectUserAnquette(event, id, currTemplate);
  });

  document.title = 'Социология > Информация об исследовании';
  window.scrollTo(0, 0);
}