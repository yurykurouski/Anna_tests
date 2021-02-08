import { ROOT_DIV } from "../constants.js";
import storageService from "../storage-service.js";
import userAnswers from "../user-answers.js";

export function collectUserAnquette(event) {
  event.preventDefault();

  const formDdata = new FormData(event.target);

  const userInformation = formDdata.getAll('additional-input');

  userAnswers.saveInformation(userInformation);

  storageService.set('UserInformation', JSON.stringify(userAnswers.information));
}

export function collectUserAnswers(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const fields = ROOT_DIV.querySelectorAll('.question-wrap');

  let answers = [];

  fields.forEach((el, index) => {
    const answer = formData.get(`radio${index + 1}`);
    answers = [...answers, answer]
  });

  userAnswers.saveAnswers(answers);

  storageService.set('UserAnswers', JSON.stringify(userAnswers.answers));
}