// import question from "../operations/questions.js";
import questionsTemplate from "../Pages/questions-edit.js";
import storageService from "../storage-service.js";

const rootDiv = document.querySelector('.container');

//* получение темплейта для формы вопросов
export function collectQuestionsTemplate(event) {
  event.preventDefault();
  const formDdata = new FormData(event.target);

  const questionsTemplate = {
    description: formDdata.get('rsrchdescription'),
    additionalInformation: formDdata.getAll('additional-information'),
    additionalInformationExtra: formDdata.getAll('additional-information-extra'),
    numberOfQuestions: formDdata.get('questions-amount'),
    possibleAnswersType: formDdata.get('possible-answers')
  }

  const numberOfQuestions = questionsTemplate.numberOfQuestions;

  renderQuestionsInputs(numberOfQuestions);
}

//* рендер инпутов для ввода вопросов
function renderQuestionsInputs(numberOfQuestions) {
  rootDiv.innerHTML = questionsTemplate;

  const questionsField = rootDiv.querySelector('.questions');
  const saveBtn = rootDiv.querySelector('.saveBtn')

  for (let i = 1; i <= numberOfQuestions; i++) {
    const questionBlock = document.createElement('div');
    questionBlock.setAttribute('id', i)
    const singleQuestionTemplate = `
      <h3>Вопрос №${i}</h3>

      <label class="pure-material-textfield-filled">
        <textarea id=${i} name='qstn-description' placeholder='Вопрос для респондента'
          required></textarea>
        <span></span>
      </label>
  `
    questionBlock.innerHTML = singleQuestionTemplate;
    questionsField.appendChild(questionBlock);
  }

  saveBtn.addEventListener('click', saveQuestions)
}

//* получение вопросов
function saveQuestions() {
  const allFields = rootDiv.querySelectorAll('div textarea');
  const questions = [];

  allFields.forEach((field) => {
    const question = {
      id: field.id,
      text: field.value
    }

    questions.push(question);
  });

  console.log(questions)
}

