import questGeneratorTemplate from "../Pages/quest-generator.js";
import storageService from "../storage-service.js";
import { collectQuestionsTemplate } from "./render-questions-edit.js";

//* рендер формы-конструктора 
function renderQuestGenerator() {
  const rootDiv = document.querySelector('.container');

  rootDiv.innerHTML = questGeneratorTemplate;

  const form = rootDiv.querySelector('div > form');

  const extraFieldBtn = rootDiv.querySelector('.add-extra-field');

  extraFieldBtn.addEventListener('click', () => addExtraField(rootDiv));
  form.addEventListener('submit', collectQuestionsTemplate);
}

//* функция добавления дополнительного поля для доп. сведений
function addExtraField(rootDiv) {
  const extraInformationDiv = rootDiv.querySelector('.additional-information-extra');
  const newExtraInformationField = document.createElement('label');

  newExtraInformationField.setAttribute('class', 'pure-material-textfield-outlined');

  extraInformationDiv.appendChild(newExtraInformationField);

  newExtraInformationField.innerHTML = `
    <input name='additional-information' placeholder=' ' required>
    <span>Введите...</span>
  `
}

export default renderQuestGenerator;