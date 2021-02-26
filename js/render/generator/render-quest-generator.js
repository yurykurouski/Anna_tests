import {
  ROOT_DIV
} from "../../constants.js";
import {
  addExtraField,
  rangeTemplate
} from "./generator-extra-fields/extra-fields.js";
import newButton from "../../components/elements/button.js";
import template from "../../pages-templates/Generator/quest-generator.js";
import collectQuestionsTemplate from "../../operations/collect-questions.js";

//* рендер формы-конструктора
function renderQuestGenerator() {
  ROOT_DIV.innerHTML = template;

  const form = ROOT_DIV.querySelector('div > form'),
    extraFieldBtn = ROOT_DIV.querySelector('.add-extra-field'),
    selectField = ROOT_DIV.querySelector('select[name="possible-answers"]');

  newButton('contained', 'submit', '', 'Продолжить', form);

  extraFieldBtn.addEventListener('click', addExtraField);
  selectField.addEventListener('change', rangeTemplate);

  form.addEventListener('submit', (event) => {
    collectQuestionsTemplate(event);
  });
  
  window.scrollTo(0, 0);
}

export default renderQuestGenerator;