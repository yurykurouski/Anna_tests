import {
  ROOT_DIV
} from "../constants.js";

function validateForms(data) {
  let hasErrors = false;

  clearErrors(hasErrors)

  for (let key in data) {
    if (!data[key]) {
      makeErrorMsg(key);
      hasErrors = true;
    }
    if (key === 'questions') {
      for (let i = 1; i <= key.length; i++){
        console.log(i)
      }
    }
  }
  return true;
  // return hasErrors
}

function makeErrorMsg(key) {
  const targetDiv = ROOT_DIV.querySelector(`#${key}`) || ROOT_DIV.querySelector;
  const errorSpan = document.createElement('span');

  errorSpan.setAttribute('class', 'error');
  errorSpan.textContent = 'Это поле обязательно для заполнения';

  targetDiv.appendChild(errorSpan);
}

function clearErrors() {
  const errorMsg = ROOT_DIV.querySelectorAll('.error');
  errorMsg.forEach(msg => msg.remove());
}

export default validateForms;