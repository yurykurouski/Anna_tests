import {
  getIdByUrl
} from "../../../utils.js";
import {
  ROOT_DIV
} from "../../../constants.js";
import userAnswers from "../../../user-answers.js";
import questionsTemplate from "../../../questions-template.js";
import template from "../../../Pages template/cabinet/completed/cabinet-completed.js";

function renderCompleted() {
  ROOT_DIV.innerHTML = template;

  const mainTable = ROOT_DIV.querySelector('table');
  const questDescription = ROOT_DIV.querySelector('.description');
  const questNum = ROOT_DIV.querySelector('.num');
  const questId = getIdByUrl();

  const currTemplate = questionsTemplate.getTemplateById(questId);
  const usersInformation = userAnswers.getInformationById(questId);
  const usersAnswers = userAnswers.getAnswersById(questId)

  questDescription.textContent = currTemplate.description;
  questNum.textContent = currTemplate.numberOfQuestions;

  if (usersInformation.length != usersAnswers.length) return console.error('Smthg wrong!');

  const headerRow = mainTable.insertRow();
  const cell1 = headerRow.insertCell(-1);

  cell1.textContent = '# респондента';

  currTemplate.additionalInformation.forEach(el => {
    const extraField = headerRow.insertCell(-1);

    extraField.textContent = el;
  });

  for (let i = 1; i <= currTemplate.numberOfQuestions; i++) {
    const questionField = headerRow.insertCell(-1);

    questionField.textContent = `Вопрос ${i}`;
  }

  //* заполнение таблицы пользовательскими ответами
  for (let i = 0; i < usersAnswers.length; i++) {
    const userAnswersRow = mainTable.insertRow(-1);
    const userNumber = userAnswersRow.insertCell(-1);
    userNumber.textContent = `${i + 1} респондент`;

    for (let j = 0; j < usersInformation[i].userInformation.length; j++) {
      if (!usersInformation[i].userInformation[j]) break;
      const userInformation = userAnswersRow.insertCell(-1);
      userInformation.textContent = usersInformation[i].userInformation[j];
    }

    for (let k = 0; k < usersAnswers[i].userAnswers.length; k++) {
      const userAnswers = userAnswersRow.insertCell(-1);
      userAnswers.textContent = usersAnswers[i].userAnswers[k]
    }
  }
}

export default renderCompleted;