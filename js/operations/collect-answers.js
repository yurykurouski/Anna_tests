import popupMessage from "../components/pop-up.js";
import { ROOT_DIV } from "../constants.js";
import renderExistingQuestions from "../render/ready/render-existingQuestions.js";
import { navigateToUrl } from "../routing.js";
import storageService from "../storage-service.js";
import userAnswers from "../user-answers.js";
import validateForms from "./validation.js";

export function collectUserAnquette(event, id, currTemplate) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const userInformation = {
    parentTemplateId: id,
    userInformation: formData.getAll('additional-input')
  };

  userAnswers.saveInformation(userInformation);

  if (validateForms(userInformation)) return;

  storageService.set('UserInformation', JSON.stringify(userAnswers.information));

  renderExistingQuestions(currTemplate);
  popupMessage('msg');
}

export function collectUserAnswers(event, id) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const fields = ROOT_DIV.querySelectorAll('.question-wrap');

  let answers = {
    parentTemplateId: id,
    userAnswers: []
  }

  fields.forEach((el, index) => {
    const answer = formData.get(`radio${index + 1}`);
    answers.userAnswers = [...answers.userAnswers, answer]
  });

  userAnswers.saveAnswers(answers);

  storageService.set('UserAnswers', JSON.stringify(userAnswers.answers));

  popupMessage('msg');
  navigateToUrl('/');
}