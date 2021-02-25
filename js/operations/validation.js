import popupMessage from "../components/pop-up.js";
import {
  ROOT_DIV
} from "../constants.js";

function validateForms(data) {
  let hasErrors = false;

  clearErrors();

  for (let key in data) {
    if (!data[key]) {
      makeErrorMsg(key);
      hasErrors = true;
    }
    if (key === 'questions') {
      for (let i = 0; i < data[key].length; i++) {
        if (!data[key][i]) {
          makeErrorMsg(key, i);
          hasErrors = true;
        }
      }
    } 
  }
  if (hasErrors) popupMessage('error', 'Заполните необходимые поля');

  return hasErrors;
}

function makeErrorMsg(key, id) {
  if (key === 'questions') {
    const target = document.getElementById(id + 1);
    target.classList.add('error');

    return;
  }

  if (key === 'description' || key === 'numberOfQuestions' || key === 'possibleAnswersType') {
    const target = ROOT_DIV.querySelector(`#${key}`);
    target.classList.add('error');

    return;
  }
}

function clearErrors() {
  const errorMsg = ROOT_DIV.querySelectorAll('.error');
  errorMsg.forEach(msg => msg.classList.remove('error'));
}

export default validateForms;