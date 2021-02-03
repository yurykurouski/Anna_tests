import { ROOT_DIV } from "../../constants.js";
import template from "../../Pages template/Ready/questionnaire-presentation";

//* сборка анкеты из конструктора
function renderQuestionnairePresentation() {
  ROOT_DIV.innerHTML = template;

}