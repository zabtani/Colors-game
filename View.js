class View {
  welcome() {
    modeCon.style.display = 'flex';
    mainCon.style.display = 'none';
    signedPlayerCon.style.display = 'none';
    inputCon.style.display = 'block';
    input.style.display = 'block';
    input.value = '';
    nextBtn.style.display = 'none';
    backBtn.style.display = 'none';
    startBtn.style.display = 'block';
    modeBtn.style.display = 'block';
    startBtn.textContent = 'start here';
    modeBtn.textContent = 'change mode';
  }
  game_title(titleText) {
    titleCon.innerHTML = titleText;
  }

  error(error) {
    startBtn.style.border = '4px solid tomato';
    startBtn.textContent = `${error}`;
    startBtn.style.fontSize = '140%';
    startBtn.style.fontWeight = 'bolder';
    startBtn.style.textTransform = 'uppercase';
    startBtn.style.color = 'tomato';

    inputLabel.style.color = 'tomato';
  }
  remove_error() {
    startBtn.style.fontWeight = '';
    startBtn.style.textTransform = 'lowercase';
    startBtn.style.border = 'none';
    startBtn.textContent = `start 
    game!`;
    startBtn.style.fontSize = '';
    startBtn.style.color = 'white';
    inputLabel.style.color = 'black';
  }

  in_round(playerName) {
    modeCon.style.display = 'none';
    mainCon.style.display = 'flex';
    signedPlayerCon.textContent = `logged in as: ${playerName}`;
    signedPlayerCon.style.display = 'block';
    signedPlayerCon.style.color = 'green';
    modeBtn.style.display = 'none';
    mainCon.innerHTML = '';
    mainCon.style.fontSize = '';
    inputCon.style.display = 'none';
    btnsCon.style.display = 'none';
  }
  won_round(nextLvl, complimant, playerName) {
    titleCon.innerHTML = `${complimant}, lets move on ${playerName}!`;
    titleCon.style.color = 'green';
    btnsCon.style.display = 'flex';
    modeBtn.style.display = 'none';
    startBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    nextBtn.textContent = `go level ${nextLvl}`;
    nextBtn.style.marginTop = '50%';
    mainCon.style.fontSize = '3rem';
    mainCon.innerHTML = ``;
  }
  lost_round() {
    tabelName.textContent = 'name';
    tableRecored.textContent = 'score';
    btnsCon.style.display = 'flex';
    modeBtn.style.display = 'none';
    startBtn.style.display = 'none';
    backBtn.style.display = 'block';
    nextBtn.style.display = 'none';
    backBtn.textContent = `restart a game `;
    titleCon.innerHTML = `LOST ROUND `;
    titleCon.style.color = 'red';
    mainCon.innerHTML = '';

    mainCon.appendChild(scoresTable);
  }
  animated_shape(backgroundColor) {
    let shape = document.createElement('div');
    shape.classList.add('animated');
    shape.classList.add('section');
    shape.style.backgroundColor = backgroundColor;
    mainCon.appendChild(shape);
  }
  shape_option(shapeIdx, color, event) {
    const colorBtn = document.createElement('button');
    colorBtn.classList.add('answer-cube');
    colorBtn.style.backgroundColor = color;
    shapes[shapeIdx].appendChild(colorBtn);
    colorBtn.addEventListener('click', event);
  }
  example_shape_option(color) {
    const colorBtn = document.createElement('button');
    colorBtn.classList.add('answer-cube');
    colorBtn.style.backgroundColor = color;
    modeCon.appendChild(colorBtn);
  }
  clear_main() {
    modeCon.innerHTML = '';
  }
  hide_shape(shape) {
    let currentShape = shapes[shape];
    currentShape.classList.remove('animated');
    currentShape.style.backgroundColor = 'transparent';
  }
  solve_shape(shape, compliment) {
    shapes[shape].innerHTML = compliment;
  }
  publish_player_score(player) {
    const score = document.createElement('li');
    const name = document.createElement('span');
    name.innerText = player.name;
    const recored = document.createElement('span');
    recored.innerText = player.score;
    score.append(name, recored);
    scoresTable.append(score);
  }
}
