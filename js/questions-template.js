import storageService from "./storage-service.js";

class QuestionsList {
  constructor(templates) {
    this.templates = templates;
  }

  saveTemplate(newTemplate) {
    this.templates = [...this.templates, newTemplate];
  }
}

const templates = JSON.parse(storageService.get('SavedQuestionsTemplate'));

const questionsTemplate = new QuestionsList(templates || []);

export default questionsTemplate;
