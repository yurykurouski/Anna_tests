export const ROOT_DIV = document.querySelector('.container');

//URLs
export const LOGIN_URL = '/login',
  NEW_QUEST_URL = '/new',
  CABINET_URL = '/cabinet',
  REGISTRATION_URL = '/signup',
  INDEX_URLS = ['/', '/index.html'],
  SEARCH_RESULTS_URL = /search=\S+/;

//regexp
export const MIN_PASSWORD_LENGTH = 8,
  EMAIL_REGEX = /\S+@\S+\.\S+/,
  TEMPLATES_REGEX = /templates\/\d/,
  PASSWORD_REGEX = /(([A-Za-z]+\d+)|(\d+[A-Za-z]+))[A-Za-z\d]/;

export const SHOW_COMPLETED = /cabinet\/completed\/\d/;