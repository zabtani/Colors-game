class View {
  welcome(justLost = true) {
    if (justLost) {
      scoresTable.style.display = 'none';
      scoresTable.innerHTML = '';
      modeCon.style.display = 'flex';
      inputCon.style.display = 'block';
      input.style.display = 'block';
    }
    mainCon.style.display = 'none';
    input.value = '';
    nextBtn.style.display = 'none';
    backBtn.style.display = 'none';
    startBtn.style.display = 'block';
    modeBtn.style.display = 'block';
    startBtn.textContent = 'Start here';
    modeBtn.textContent = 'Change mode';
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

  in_round() {
    actionsCon.style.display = 'none';
    mainCon.style.display = 'flex';
  }
  won_round(nextLvl, complimant, playerName) {
    if (nextLvl === 2) {
      modeCon.style.display = 'none';
      inputCon.style.display = 'none';
    }
    actionsCon.style.display = 'flex';
    subTitleCon.innerHTML = `${complimant},<br/> lets move on ${playerName}!`;
    titleCon.style.color = 'green';
    modeBtn.style.display = 'none';
    startBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    nextBtn.textContent = `Go level ${nextLvl}`;

    mainCon.style.display = 'none';
    mainCon.innerHTML = ``;
  }
  lost_round() {
    subTitleCon.innerHTML = '';
    scoresTable.style.display = 'block';
    actionsCon.style.display = 'flex';
    inputCon.style.display = 'none';
    tabelName.textContent = 'name';
    tableRecored.textContent = 'score';
    btnsCon.style.display = 'flex';
    modeBtn.style.display = 'none';
    startBtn.style.display = 'none';
    backBtn.style.display = 'block';
    nextBtn.style.display = 'none';
    backBtn.textContent = `Play again! `;
    titleCon.innerHTML = `LOST ROUND `;
    titleCon.style.color = 'red';
    mainCon.innerHTML = '';
    mainCon.style.display = 'none';
    modeCon.style.display = 'none';
    actionsCon.appendChild(scoresTable);
  }
  animated_shape(backgroundColor) {
    let shape = document.createElement('div');
    shape.classList.add('section');
    let animation = document.createElement('div');
    animation.style.backgroundColor = backgroundColor;
    shape.appendChild(animation);
    mainCon.appendChild(shape);
    animation.classList.add('animated');
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
    let animation = currentShape.getElementsByClassName('animated')[0];
    console.log(animation);
    animation.style.display = 'none';
  }
  solve_shape(shape, com) {
    shapes[shape].classList.add('solved');
    const complimant = document.createElement('div');
    complimant.className = 'sectionComplimant';

    complimant.textContent = com;
    shapes[shape].appendChild(complimant);
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
