import storageService from "./storage-service.js";

class UserAnswersList {
  constructor(information, answers) {
    this.information = information;
    this.answers = answers;
  }

  saveInformation(newInform) {
    this.information = [...this.information, newInform];
  }

  saveAnswers(newAnswer) {
    this.answers = [...this.answers, newAnswer];
  }
}

const information = JSON.parse(storageService.get('UserInformation'));
const answers = JSON.parse(storageService.get('UserAnswers'));

const userAnswers = new UserAnswersList(information || [], answers || []);

export default userAnswers;
