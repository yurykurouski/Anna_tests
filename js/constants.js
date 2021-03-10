export const ROOT_DIV = document.querySelector('.container');

//URLs
export const LOGIN_URL = '/login',
  NEW_QUEST_URL = '/new',
  CABINET_URL = '/cabinet',
  REGISTRATION_URL = '/signup',
  INDEX_URLS = ['/', '/index.html'],
  CARDS_PAGE = /page\/\d/,
  SEARCH_RESULTS_URL = /search=\S+/,
  TEMPLATES_REGEX = /templates\/\d/,
  SHOW_COMPLETED = /cabinet\/completed\/\d/;

//auth
export const MIN_PASSWORD_LENGTH = 8,
  EMAIL_REGEX = /\S+@\S+\.\S+/,
  PASSWORD_REGEX = /(([A-Za-z]+\d+)|(\d+[A-Za-z]+))[A-Za-z\d]/;

export const IS_DIGIT = /\d/,
  IS_STRING_EMPTY = /^\s*$/;

//themes
export const DARK_THEME = 'Dark',
  LIGHT_THEME = 'Light';

//pagination
export const MAX_CARDS_PER_PAGE = 10;

//sheets
export const SCRIPT_URL = 'https://sheet.best/api/sheets/ed398154-6f02-402b-9c14-3549f34b66ce',
  SHEETS_URL = 'https://docs.google.com/spreadsheets/d/1l5vcyO5dQzTbzEXZjZJLC-VRanIVVOvKkiDnEBWhMJ8/edit#gid=0';