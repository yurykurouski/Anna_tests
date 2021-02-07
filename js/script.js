import { ROOT_DIV } from "./constants.js";
import renderQuestGenerator from "./render/generator/render-quest-generator.js";
import { renderExsistingAnquette } from "./render/ready/render-exsistingAnquette.js";
import storageService from "./storage-service.js";

function start() {
  const toNewQuestBtn = ROOT_DIV.querySelector('.new-questionaire');
  const goToAnquetteBtn = ROOT_DIV.querySelector('.go-to-anquette');
  const researchesWrap = ROOT_DIV.querySelector('div > .aw-researches');

  const templates = JSON.parse(storageService.get('SavedQuestionsTemplate'));

  if (!templates) {
    researchesWrap.innerHTML = `
      <span>Нет доступных исследований</span>
    `
  } else {
    templates.forEach(el => {
      const researchCard = document.createElement('li');
      const description = document.createElement('p');
      const info = document.createElement('span');

      researchesWrap.appendChild(researchCard);
      researchCard.appendChild(description);
      researchCard.appendChild(info);

      description.textContent = el.description;
      info.textContent = `Количество вопросов: ${el.numberOfQuestions}. Автор: (Сюда автора)`
    })
  }




  
  


  toNewQuestBtn.addEventListener('click', renderQuestGenerator);
  goToAnquetteBtn.addEventListener('click', renderExsistingAnquette);
};

start();