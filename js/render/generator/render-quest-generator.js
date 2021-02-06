import { ROOT_DIV } from "../../constants.js";
import collectQuestionsTemplate from "../../operations/collect-questions.js";
import template from "../../Pages template/Generator/quest-generator.js";
import { renderQuestionsInputs } from "./render-questions-edit.js";

//* рендер формы-конструктора
function renderQuestGenerator() {
  ROOT_DIV.innerHTML = template;

  const form = ROOT_DIV.querySelector('div > form');

  const extraFieldBtn = ROOT_DIV.querySelector('.add-extra-field');

  extraFieldBtn.addEventListener('click', () => addExtraField(ROOT_DIV));
  
  form.addEventListener('submit', () => {
    collectQuestionsTemplate(event);
    renderQuestionsInputs();
  });
}

//* функция добавления дополнительного поля для доп. сведений
function addExtraField(ROOT_DIV) {
  const extraInformationDiv = ROOT_DIV.querySelector('.additional-information-extra');
  const newExtraInformationField = document.createElement('label');

  newExtraInformationField.setAttribute('class', 'pure-material-textfield-outlined');

  extraInformationDiv.appendChild(newExtraInformationField);

  newExtraInformationField.innerHTML = `
    <input name='additional-information-extra' placeholder=' ' required>
    <span>Введите...</span>
  `
}

export default renderQuestGenerator;