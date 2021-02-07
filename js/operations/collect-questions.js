import questionsTemplate from "../questions-template.js";
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
    possibleAnswersType: formDdata.get('possible-answers'),
    ifRange: formDdata.getAll('variant-field')
  }

  questionsTemplate.saveTemplate(savedQuestionsTemplate);

  storageService.set('SavedQuestionsTemplate', JSON.stringify(questionsTemplate.templates));

  console.log(savedQuestionsTemplate);
  const numberOfQuestions = savedQuestionsTemplate.numberOfQuestions;

  return numberOfQuestions;
}

//* получение вопросов
export function saveQuestions(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);

  const savedQuestions =  formData.getAll('qstn-description');

  storageService.set('SavedQuestions', JSON.stringify(savedQuestions));
}

export default collectQuestionsTemplate;