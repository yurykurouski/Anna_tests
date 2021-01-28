import questGeneratorTemplate from "../Pages/quest-generator.js";
import renderQuestionsEdit from "./render-questions-edit.js";



function renderQuestGenerator() {
  const rootDiv = document.querySelector('.container');

  rootDiv.innerHTML = questGeneratorTemplate;

  const form = rootDiv.querySelector('div > form');

  const extraFieldBtn = rootDiv.querySelector('.add-extra-field');

  extraFieldBtn.addEventListener('click', addExtraField);
  // form.addEventListener('submit', renderQuestionsEdit);
  
}

function addExtraField() {
  const extraInformationDiv = rootDiv.querySelector('.additional-information-extra');
  const newExtraInformationField = document.createElement('label');

  newExtraInformationField.setAttribute('class', 'pure-material-textfield-outlined');

  extraInformationDiv.appendChild(newExtraInformationField);

  newExtraInformationField.innerHTML = `
    <input placeholder=' ' required>
    <span>Textfield</span>
  `

}

export default renderQuestGenerator;