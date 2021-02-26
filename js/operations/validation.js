import popupMessage from "../components/pop-up.js";
import {
  EMAIL_REGEX,
  LOGIN_URL,
  MIN_PASSWORD_LENGTH,
  PASSWORD_REGEX,
  REGISTRATION_URL,
  ROOT_DIV
} from "../constants.js";
import usersList from "../users.js";

function validateForms(data) {
  let hasErrors = false;

  const {
    pathname: currentUrl
  } = window.location;
  const existingUser = usersList.getUserByUsername(data.username);

  clearErrors();

  for (let key in data) {
    if (key === 'username') {
      if (currentUrl === REGISTRATION_URL) {
        if (!data[key]) {
          makeErrorMsg(key, 'Укажите email');
          return hasErrors = true;
        }
        if (data[key] && !EMAIL_REGEX.test(data[key])) {
          makeErrorMsg(key, 'Неверный формат email');
          return hasErrors = true;
        }
        if (existingUser) {
          makeErrorMsg(key, 'Пользователь с указанным e-mail уже существует.');
          return hasErrors = true;
        }
      }

      if (currentUrl === LOGIN_URL) {
        if (!data[key]) {
          makeErrorMsg(key, 'Укажите имя пользователя');
          return hasErrors = true;
        }
        if (!data.user) {
          makeErrorMsg(key, 'Пользователь не найден');
          return hasErrors = true;
        }
      }
    }

    if (key === 'password') {
      if (currentUrl === REGISTRATION_URL) {
        if (data[key] && data[key].length < MIN_PASSWORD_LENGTH) {
          makeErrorMsg(key, `Пароль должен состоять минимум из ${MIN_PASSWORD_LENGTH} символов`);
          return hasErrors = true;
        }
        if (data[key] && !PASSWORD_REGEX.test(data[key]) && data[key].length > MIN_PASSWORD_LENGTH) {
          makeErrorMsg(key, 'Неверный формат пароля');
          return hasErrors = true;
        }
        if (data[key] !== data.repeatPass && PASSWORD_REGEX.test(data[key]) && data[key].length > MIN_PASSWORD_LENGTH) {
          makeErrorMsg(key, 'Пароли не совпадают');
          return hasErrors = true;
        }
      }

      if (currentUrl === LOGIN_URL) {
        if (data.user && data.user.password !== data.hashedPassword && data.password) {
          makeErrorMsg(key, 'Неверный пароль');
          return hasErrors = true;
        }
      }

      if (!data[key]) {
        makeErrorMsg(key, 'Введите пароль');
        return hasErrors = true;
      }
    }

    if (key === 'description' || key === 'numberOfQuestions' || key == 'possibleAnswersType') {
      if (!data[key]) {
        makeErrorMsg(key);
        hasErrors = true;
      }
    }

    if (key === 'questions') {
      for (let i = 0; i < data[key].length; i++) {
        if (!data[key][i]) {
          makeErrorMsg(key, '', i);
          hasErrors = true;
        }
      }
    }
  }

  if (hasErrors) popupMessage('error', 'Заполните необходимые поля');

  return hasErrors;
}

function makeErrorMsg(key, msg, id) {
  popupMessage('error', msg);
  if (key === 'questions') {
    const target = document.getElementById(id + 1);
    target.classList.add('error');
    return;
  }

  const target = ROOT_DIV.querySelector(`#${key}`);
  target.classList.add('error');

  return;
}

function clearErrors() {
  const errorMsg = ROOT_DIV.querySelectorAll('.error');
  errorMsg.forEach(msg => msg.classList.remove('error'));
}

export default validateForms;