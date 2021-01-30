import questionsTemplate from "../Pages/questions-edit.js";

const rootDiv = document.querySelector('.container');


export function collectQuestionsTemplate(event) {
  event.preventDefault();
  const formDdata = new FormData(event.target);

  const questionsTemplate = {
    description: formDdata.get('rsrchdescription'),
    additionalInformation: formDdata.getAll('additional-information'),
    additionalInformationExtra: formDdata.getAll('additional-information-extra'),
    numberOfQuestions: parseInt(formDdata.get('questions-amount')),
    possibleAnswersType: formDdata.get('possible-answers')
  }


  renderQuestionsEdit();
}

function renderQuestionsEdit(event) {
  rootDiv.innerHTML = questionsTemplate;

  console.log(questionsTemplate.numberOfQuestions);

}


