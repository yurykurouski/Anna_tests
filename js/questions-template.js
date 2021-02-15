import storageService from "./storage-service.js";

class QuestionsList {
  constructor(templates, questions) {
    this.templates = templates;
    this.questions = questions;
  }

  saveTemplate(newTemplate) {
    this.templates = [...this.templates, newTemplate];
  }

  saveQuestions(newQuestons) {
    this.questions = [...this.questions, newQuestons];
  }

  getTemplatesByUser(username) {
    return this.templates.filter(template => template.owner === username);
  }

  getTemplateById(id) {
    return this.templates.find(template => template.id === id);
  }

  getQuestionsTemplateById(id) {
    return this.questions.find(template => template.parentTemplateId === id);
  }
}

const templates = JSON.parse(storageService.get('SavedQuestionsTemplate'));
const questions = JSON.parse(storageService.get('SavedQuestions'));

const questionsTemplate = new QuestionsList(templates || [], questions || []);

export default questionsTemplate;
