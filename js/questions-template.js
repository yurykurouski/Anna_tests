import storageService from "./storage-service.js";

class QuestionsTemplate {
  constructor(template) {
    this.template = template;
  }
}

const template = JSON.parse(storageService.get('QuestionTemplate'));

const questionsTemplate = new QuestionsTemplate(template);

export default questionsTemplate;
