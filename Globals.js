const SCORES = JSON.parse(localStorage.getItem('scores'));
const GAME_NAME = 'Sharp and up!';
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
shapes = document.getElementsByClassName('section');
titleCon = document.getElementById('title-container');
signedPlayerCon = document.getElementById('signed-player');
mainCon = document.getElementById('main-container');
inputCon = document.getElementById('inputContainer');
btnsCon = document.getElementById('btns-container');
input = document.getElementById('player-name-input');
inputLabel = document.getElementById('name-label');
modeBtn = document.getElementById('change-mode');
startBtn = document.getElementById('start-game');
backBtn = document.getElementById('back-to-start');
nextBtn = document.getElementById('next-round');
scoresTable = document.getElementById('scores');

tabelName = document.getElementById('tabel-header-name');
tableRecored = document.getElementById('tabel-header-recored');
modeCon = document.getElementById('mode-container');
actionsCon = document.getElementById('actions');
subTitleCon = document.getElementById('sub-title-container');
