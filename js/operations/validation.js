import {
  EMAIL_REGEX,
  IS_DIGIT,
  IS_STRING_EMPTY,
  LOGIN_URL,
  MIN_PASSWORD_LENGTH,
  NEW_QUEST_URL,
  PASSWORD_REGEX,
  REGISTRATION_URL,
  ROOT_DIV,
  TEMPLATES_REGEX
} from '../constants.js';
import usersList from '../users.js';
import popupMessage from '../components/pop-up.js';

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

    if (TEMPLATES_REGEX.test(currentUrl)) {
      if (key === 'userInformation') {
        data[key].forEach((key, index) => {
          if (key.length === 0) {
            makeErrorMsg(`userInformation-${index}`, 'Заполните все необходимые поля');
            return hasErrors = true;
          }
        });
      }

      if (key === 'userAnswers') {
        data[key].forEach((el, index) => {
          if (!el) {
            makeErrorMsg(`userAnswers-${index}`, 'Ответьте на все вопросы');
            return hasErrors = true;
          }
        });
      }
    }

    if (NEW_QUEST_URL === currentUrl) {
      if (key === 'description' || key === 'numberOfQuestions' || key === 'possibleAnswersType' || key === 'templateName') {
        if (IS_STRING_EMPTY.test(data[key])) {
          makeErrorMsg(key, 'Заполните все необходимые поля');
          return hasErrors = true;
        }
      }

      if (key === 'numberOfQuestions' && !IS_DIGIT.test(data[key])) {
        makeErrorMsg(key, 'В это поле необходимо ввести число');
        return hasErrors = true;
      }

      if (key === 'questions' || key === 'ifRange') {
        for (let i = 0; i < data[key].length; i++) {
          if (IS_STRING_EMPTY.test(data[key][i])) {
            makeErrorMsg(key, 'Заполните все поля или удалите ненужные', i);
            return hasErrors = true;
          }
        }
      }
    }
  }

  return hasErrors;
}

function makeErrorMsg(key, msg, id) {
  popupMessage('error', msg);
  if (key === 'questions' || key === 'ifRange') {
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