import {
  ROOT_DIV
} from "../constants.js";
import userAnswers from "../user-answers.js";

function makeTable(currTemplate, questId) {
  const mainTable = ROOT_DIV.querySelector('table');

  const usersInformation = userAnswers.getInformationById(questId);
  const usersAnswers = userAnswers.getAnswersById(questId);

  const headerRow = mainTable.insertRow();
  const cell1 = headerRow.insertCell(-1);

  cell1.textContent = '# респондента';

  currTemplate.userInformation.forEach(el => {
    const extraField = headerRow.insertCell(-1);

    extraField.textContent = el;
  });

  for (let i = 1; i <= currTemplate.numberOfQuestions; i++) {
    const questionField = headerRow.insertCell(-1);

    questionField.textContent = `Вопрос ${i}`;
  }
  
  if (usersInformation.length != usersAnswers.length) return console.error('Smthg wrong!');

  //* заполнение таблицы пользовательскими ответами
  for (let i = 0; i < usersAnswers.length; i++) {
    const userAnswersRow = mainTable.insertRow(-1);
    const userNumber = userAnswersRow.insertCell(-1);
    userNumber.innerHTML = `<b>${i + 1}</b>`;

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

export default makeTable;