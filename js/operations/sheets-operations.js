import { SCRIPT_URL, SHEETS_URL } from "../constants.js";

export function sendData(data) {
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
      // The response comes here
      console.log(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
    });
}

export function prepareData(usrInformation, usrAnswers) {
  let data = [];

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
  console.log(data);
}


export function deleteData() {
  fetch(`${SCRIPT_URL}/all`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

