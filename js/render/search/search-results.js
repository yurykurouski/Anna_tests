import { ROOT_DIV } from "../../constants.js";
import questionsTemplate from "../../questions-template.js";
import template from "../../pages-templates/search/search.js";
import newResearchCard from "../../components/research-cards.js";

function renderSearchPage(event, text) {
  event.preventDefault();

  ROOT_DIV.innerHTML = template;

  const headerMsg = ROOT_DIV.querySelector('#search-message');
  const wrap = ROOT_DIV.querySelector('.aw-researches');
  const matchingTemplates = questionsTemplate.getTemplateByRequest(text);

  if (matchingTemplates.length === 0) {
    headerMsg.textContent = 'По вашему запросу ничего не найдено.'
    return;
  }

  headerMsg.textContent = `По запросу '${text}' найдено:`;

  matchingTemplates.forEach(template => {
    newResearchCard.main(template, wrap);
  });
}

export default renderSearchPage;