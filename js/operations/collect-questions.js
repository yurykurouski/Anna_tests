import { ROOT_DIV } from "../constants.js";
import storageService from "../storage-service.js";

//* получение темплейта для формы вопросов
function collectQuestionsTemplate(event) {
  event.preventDefault();
  
  const formDdata = new FormData(event.target);

  const savedQuestionsTemplate = {
    description: formDdata.get('rsrchdescription'),
    additionalInformation: formDdata.getAll('additional-information'),
    additionalInformationExtra: formDdata.getAll('additional-information-extra'),
    numberOfQuestions: formDdata.get('questions-amount'),
    possibleAnswersType: formDdata.get('possible-answers')
  }

  storageService.set('QuestionTemplate', JSON.stringify(savedQuestionsTemplate));

  const numberOfQuestions = savedQuestionsTemplate.numberOfQuestions;

  return numberOfQuestions;
}

//* получение вопросов
export function saveQuestions(event) {
  event.preventDefault();
  
  const allFields = ROOT_DIV.querySelectorAll('div textarea');
  const questions = [];

  allFields.forEach((field) => {
    const question = {
      id: field.id,
      text: field.value
    }

    questions.push(question);
  });

  storageService.set('SavedQuestions', JSON.stringify(questions));
}

export default collectQuestionsTemplate;