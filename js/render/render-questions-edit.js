import questionsTemplate from "../Pages/questions-edit.js";

const rootDiv = document.querySelector('.container');

function renderQuestionsEdit() {
  rootDiv.innerHTML = questionsTemplate;
}

export default renderQuestionsEdit;