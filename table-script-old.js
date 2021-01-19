const testForm = document.querySelector('form');
const showResultsBtn = document.querySelector('#show-table')

const answersArr = [];

testForm.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();

  if (answersArr.length != 0) return;

  answersArr.push(testForm.elements['first-question'].value);
  answersArr.push(testForm.elements['second-question'].value);
  answersArr.push(testForm.elements['third-question'].value);

  console.log(answersArr);
}

showResultsBtn.addEventListener('click', showTable)

function showTable() {
  let i = 1;
  if (answersArr.length == 0) return;

  const mainTable = document.createElement('table');
  const headRawWrap = document.createElement('tr')
  const headRaw = document.createElement('th'); // строка заголовка

  const mainRaw = document.createElement('tr');
  const usrIndex = document.createElement('td');

  document.body.appendChild(mainTable);
  mainTable.appendChild(headRawWrap);
  headRawWrap.appendChild(headRaw);
  mainTable.appendChild(mainRaw);

  mainRaw.appendChild(usrIndex);

  headRaw.textContent = 'Ответы/№ вопроса';
  usrIndex.textContent = 'Анкета №1';

  answersArr.forEach((value, index) => {
    const headRawQuest = document.createElement('th');
    const answerValue = document.createElement('td');

    headRawWrap.appendChild(headRawQuest);
    mainRaw.appendChild(answerValue);

    headRawQuest.textContent = index + 1;
    answerValue.textContent = value;

    i++;
  });
}