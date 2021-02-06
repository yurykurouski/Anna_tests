import { ROOT_DIV } from "./constants.js";
import renderQuestGenerator from "./render/generator/render-quest-generator.js";
import renderExistingQuestions from "./render/ready/render-existingQuestions.js";
import { renderExsistingAnquette } from "./render/ready/render-exsistingAnquette.js";
import storageService from "./storage-service.js";

(function start() {
  renderExistingQuestions()

/*   const toNewQuestBtn = ROOT_DIV.querySelector('.new-questionaire');
  const goToAnquetteBtn = ROOT_DIV.querySelector('.go-to-anquette');

  // const researchCaption = ROOT_DIV.querySelector('div .description');

  const template = JSON.parse(storageService.get('QuestionTemplate'));
  
  // researchCaption.textContent = template.description;

  toNewQuestBtn.addEventListener('click', renderQuestGenerator);
  goToAnquetteBtn.addEventListener('click', renderExsistingAnquette); */
})();