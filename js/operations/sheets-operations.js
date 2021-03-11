import popupMessage from "../components/pop-up.js";
import { SCRIPT_URL, SHEETS_URL } from "../constants.js";

export function sendData(data) {
  if (data.length === 0) {
    popupMessage('error', 'Таблица пустая');
    return;
  }

  fetch(SCRIPT_URL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((r) => r.json())
    .then((data) => {
      window.open(SHEETS_URL);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function prepareData(usrInformation, usrAnswers) {
  let data = [];

  if (usrAnswers.length === 0) {
    return;
  }

  for (let i = 0; i < usrInformation.length; i++) {
    const obj = {};

    obj.Id = i + 1;
    obj.Information = usrInformation[i].userInformation.toString();

    usrAnswers[i].userAnswers.forEach((el, index) => {
      obj[index + 1] = el
    });

    data.push(obj);
  }

  return data;
}