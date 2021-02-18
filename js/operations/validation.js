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
  return hasErrors
}

function makeErrorMsg(key, id) {
  const errorSpan = document.createElement('span');

  errorSpan.setAttribute('class', 'error');
  errorSpan.textContent = 'Это поле обязательно для заполнения';

  if (key === 'questions') {
    const parent = document.getElementById(id + 1);
    parent.appendChild(errorSpan);

    return;
  }

  if (key === 'description' || key === 'numberOfQuestions' || key === 'possibleAnswersType') {
    const targetDiv = ROOT_DIV.querySelector(`#${key}`);
    targetDiv.appendChild(errorSpan);

    return;
  }
}

function clearErrors() {
  const errorMsg = ROOT_DIV.querySelectorAll('.error');
  errorMsg.forEach(msg => msg.remove());
}

export default validateForms;