import storageService from "./storage-service.js";

class QuestionsList {
  constructor(list) {
    this.list = list;
  }
}

const list = JSON.parse(storageService.get('SavedQuestions'));

const questionsList = new QuestionsList(list);

export default questionsList;
