const SCORES = JSON.parse(localStorage.getItem('scores'));
const GAME_NAME = 'SHARP AND UP!';
const TITLE_COLORS = ['black', 'blue', 'grey', 'gold', 'purple'];
const COLOR_STACK_OPTIONS = [
  ['black', 'blue', 'red', 'green', 'yellow'],
  ['purple', 'brown', 'white', 'black', 'aqua'],
  ['purple', 'blue', 'brown', 'black', 'yellow'],
];
const COMPLIMANTS = [
  'good memory!',
  'genius!',
  'champion!',
  'elephant!',
  'wooow!',
  'nice!',
  'amazing!',
  'pro!',
];
btnsCon = document.getElementById('btns-container');
nextBtn = document.getElementById('next-round');
modeBtn = document.getElementById('change-mode');
backBtn = document.getElementById('back-to-start');
startBtn = document.getElementById('start-game');
shapes = document.getElementsByClassName('section');
titleCon = document.getElementById('title-container');
signedPlayerCon = document.getElementById('signed-player');
mainCon = document.getElementById('main-container');
inputCon = document.getElementById('inputContainer');
input = document.getElementById('player-name-input');
inputLabel = document.getElementById('name-label');
scores = document.getElementById('scores');

scoresTable = document.getElementById('scores-table');

tabelName = document.getElementById('tabel-header-name');
tableRecored = document.getElementById('tabel-header-recored');
modeCon = document.getElementById('mode-container');
actionsCon = document.getElementById('actions');
subTitleCon = document.getElementById('sub-title-container');
