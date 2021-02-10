import currentUser from "../current-user.js";
import questionsTemplate from "../questions-template.js";
import storageService from "../storage-service.js";
import {
  generateId
} from "../utils.js";

//* получение темплейта для формы вопросов
function collectQuestionsTemplate(event) {
  event.preventDefault();

  const formDdata = new FormData(event.target);

  const savedQuestionsTemplate = {
    owner: currentUser.userData.username,
    id: generateId(questionsTemplate.templates),
    description: formDdata.get('rsrchdescription'),
    additionalInformation: formDdata.getAll('additional-information'),
    additionalInformationExtra: formDdata.getAll('additional-information-extra'),
    numberOfQuestions: formDdata.get('questions-amount'),
    possibleAnswersType: formDdata.get('possible-answers'),
    ifRange: formDdata.getAll('variant-field')
  }

  questionsTemplate.saveTemplate(savedQuestionsTemplate);

  storageService.set('SavedQuestionsTemplate', JSON.stringify(questionsTemplate.templates));

  return savedQuestionsTemplate.numberOfQuestions;
}

//* получение вопросов
export function collectQuestions(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const savedQuestions = {
    parentTemplateId: questionsTemplate.templates.length,
    questions: formData.getAll('qstn-description')
  }

  questionsTemplate.saveQuestions(savedQuestions);

  storageService.set('SavedQuestions', JSON.stringify(questionsTemplate.questions))
}

export default collectQuestionsTemplate;