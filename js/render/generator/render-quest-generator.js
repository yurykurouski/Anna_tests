import { ROOT_DIV } from "../../constants.js";
import collectQuestionsTemplate from "../../operations/collect-questions.js";
import template from "../../Pages template/Generator/quest-generator.js";
import { addExtraField, rangeTemplate } from "./generator-extra-fields/extra-fields.js";
import { renderQuestionsInputs } from "./render-questions-edit.js";

//* рендер формы-конструктора
function renderQuestGenerator() {
  ROOT_DIV.innerHTML = template;
  const form = ROOT_DIV.querySelector('div > form');

  const extraFieldBtn = ROOT_DIV.querySelector('.add-extra-field');
  const selectField = ROOT_DIV.querySelector('select[name="possible-answers"]');

  extraFieldBtn.addEventListener('click', () => addExtraField(ROOT_DIV));

  selectField.addEventListener('change', rangeTemplate);

  form.addEventListener('submit', (event) => {
    renderQuestionsInputs(collectQuestionsTemplate(event));
  });
}

export default renderQuestGenerator;