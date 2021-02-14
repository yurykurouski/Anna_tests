export const ROOT_DIV = document.querySelector('.container');

//URLs
export const LOGIN_URL = '/login';
export const NEW_QUEST_URL = '/new';
export const CABINET_URL = '/cabinet';
export const REGISTRATION_URL = '/signup';
export const INDEX_URLS = ['/', '/index.html'];

//regexp
export const MIN_PASSWORD_LENGTH = 8;
export const EMAIL_REGEX = /\S+@\S+\.\S+/;
export const TEMPLATES_REGEX = /templates\/\d/;
export const PASSWORD_REGEX = /(([A-Za-z]+\d+)|(\d+[A-Za-z]+))[A-Za-z\d]/;

export const SHOW_COMPLETED = /cabinet\/completed\/\d/;