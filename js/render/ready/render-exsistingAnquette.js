import { ROOT_DIV } from "../../constants.js";
import template from "../../Pages template/Ready/questionnaire-presentation.js";
import questionsTemplate from "../../questions-template.js";
import renderExistingQuestions from "./render-existingQuestions.js";


//* сборка анкеты из конструктора
export function renderExsistingAnquette() {
  ROOT_DIV.innerHTML = template;
  
  const description = ROOT_DIV.querySelector('div p');

  description.textContent = questionsTemplate.template.description;

  const additionalInformation = ROOT_DIV.querySelector('div .additional-information-anquette');

  questionsTemplate.template.additionalInformation.forEach(param => {
    const wrap = document.createElement('div');
    wrap.setAttribute('class', 'additional-wrap');

    wrap.innerHTML = `
      <h4 class='additional-header'>${param}:</h4>

      <label class="pure-material-textfield-outlined">
        <input name='additional-input' placeholder=' '>
        <span>Введите...</span>
      </label>
    `
    additionalInformation.appendChild(wrap)
  })

  const additionalExtra = ROOT_DIV.querySelector('div .additional-extra');

  //!здесь генерит пустой span, потому что есть пустой элемент

  questionsTemplate.template.additionalInformationExtra.forEach(param => {
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
  })

  const summary = ROOT_DIV.querySelector('.summary');
  
  summary.textContent = `Количество вопросов: ${questionsTemplate.template.numberOfQuestions}`;

  const goToQuestionsBtn = ROOT_DIV.querySelector('.go-to-questions');

  goToQuestionsBtn.addEventListener('click', renderExistingQuestions)

}