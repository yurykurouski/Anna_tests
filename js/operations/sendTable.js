import { SCRIPT_URL, SHEETS_URL } from "../constants.js";

function sendData(data) {
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
      // window.open(SHEETS_URL);
      console.log(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
    });
}

export default sendData;