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

  const fields = ROOT_DIV.querySelectorAll('.question-wrap');

  let userAnswers = [];

  fields.forEach((el, index) => {
    const answer = formData.get(`radio${index + 1}`);
    userAnswers = [...userAnswers, answer]
  });

  storageService.set('UserAnswers', JSON.stringify(userAnswers));

}