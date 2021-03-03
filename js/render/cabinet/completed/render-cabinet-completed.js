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

  const questDescription = ROOT_DIV.querySelector('.completed-description'),
    questName = ROOT_DIV.querySelector('.completed-name'),
    questNum = ROOT_DIV.querySelector('.completed-num');

  const questId = getIdByUrl();

  const currTemplate = questionsTemplate.getTemplateById(questId);

  questName.textContent = currTemplate.templateName;
  questDescription.textContent = currTemplate.description;
  questNum.textContent = `Количество вопросов: ${currTemplate.numberOfQuestions}`;

  makeTable(currTemplate, questId);
}

export default renderCompleted;