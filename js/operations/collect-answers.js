import { ROOT_DIV } from "../constants.js";
import storageService from "../storage-service.js";

export function collectUserAnquette(event) {
  event.preventDefault();

  const formDdata = new FormData(event.target);

  const savedUsrAnquette = {
    userInformation: formDdata.getAll('additional-input'),
  }

  storageService.set('UserInformation', JSON.stringify(savedUsrAnquette));
}

export function collectUserAnswers(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const field = ROOT_DIV.querySelectorAll('.question-wrap');

  const userAnswers = {
    answers:[]
  }

  field.forEach((el, index) => {
    const answer = formData.get(`radio${index + 1}`);
    userAnswers.answers = [...userAnswers.answers, answer]
  });

  storageService.set('UserAnswers', JSON.stringify(userAnswers));

}