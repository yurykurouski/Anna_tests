import storageService from './storage-service.js';

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

  getInformationById(id) {
    return this.information.filter(template => template.parentTemplateId  === id)
  }

  getAnswersById(id) {
    return this.answers.filter(template => template.parentTemplateId  === id)
  }

  deleteAnswersById(id) {
    this.answers = this.answers.filter(answer => answer.parentTemplateId !== id);
    this.information = this.information.filter(usr => usr.parentTemplateId !== id);
  }
}

const information = JSON.parse(storageService.get('UserInformation'));
const answers = JSON.parse(storageService.get('UserAnswers'));

const userAnswers = new UserAnswersList(information || [], answers || []);

export default userAnswers;
