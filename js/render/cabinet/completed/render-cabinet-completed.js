import {
  getIdByUrl
} from "../../../utils.js";
import {
  ROOT_DIV
} from "../../../constants.js";
import makeTable from "../../../operations/make-table.js";
import questionsTemplate from "../../../questions-template.js";
import template from "../../../pages-templates/cabinet/completed/cabinet-completed.js";

function renderCompleted() {
  ROOT_DIV.innerHTML = template;

  const questDescription = ROOT_DIV.querySelector('.description'),
    questNum = ROOT_DIV.querySelector('.num');

  const questId = getIdByUrl();

  const currTemplate = questionsTemplate.getTemplateById(questId);

  questDescription.textContent = currTemplate.description;
  questNum.textContent = currTemplate.numberOfQuestions;

  makeTable(currTemplate, questId);
}

export default renderCompleted;