class View {
  //when title change:
  game_title(titleText) {
    titleCon.innerHTML = titleText;
  }
  //when input invalid:
  validation_error(error) {
    startBtn.textContent = error ? `${error}` : 'Start here';
    inputLabel.className = error ? 'inputLabel err' : 'inputLabel';
    if (error) {
      startBtn.classList.add('err');
    } else {
      startBtn.classList.remove('err');
    }
  }
  //when restart after 1st use:
  restart() {
    scores.style.display = 'none';
    scoresTable.innerHTML = '';
    modeCon.style.display = 'flex';
    inputCon.style.display = 'block';
    input.style.display = 'block';
    backBtn.style.display = 'none';
    modeBtn.style.display = 'block';
    startBtn.style.display = 'block';
    input.value = '';
  }
  //when match started:
  match_start() {
    modeCon.style.display = 'none';
    inputCon.style.display = 'none';
    startBtn.style.display = 'none';
    modeBtn.style.display = 'none';
  }
  //when round started:
  in_round() {
    actionsCon.style.display = 'none';
    mainCon.style.display = 'flex';
  }
  //when round won:
  won_round(nextLvl, complimant, playerName) {
    titleCon.style.display = 'block';
    actionsCon.style.display = 'flex';
    subTitleCon.innerHTML = `${complimant},<br/> lets move on ${playerName}!`;
    nextBtn.style.display = 'block';
    nextBtn.textContent = `Go to lvl ${nextLvl}`;
    mainCon.style.display = 'none';
    mainCon.innerHTML = ``;
  }
  //when round lost:
  lost_round(lvl) {
    subTitleCon.innerHTML = '';
    scores.style.display = 'block';
    actionsCon.style.display = 'flex';
    inputCon.style.display = 'none';
    btnsCon.style.display = 'flex';
    modeBtn.style.display = 'none';
    startBtn.style.display = 'none';
    backBtn.style.display = 'block';
    nextBtn.style.display = 'none';
    titleCon.innerHTML = `LOST ROUND ${lvl}`;
    titleCon.style.color = 'red';
    mainCon.innerHTML = '';
    mainCon.style.display = 'none';
  }
  //when reveal animated shape
  animated_shape(backgroundColor) {
    let shape = document.createElement('div');
    shape.classList.add('section');
    let animation = document.createElement('div');
    animation.style.backgroundColor = backgroundColor;
    shape.appendChild(animation);
    mainCon.appendChild(shape);
    animation.classList.add('animated');
  }
  //when optipn for a colored shaped created in it
  shape_option(shapeIdx, color, event) {
    const colorBtn = document.createElement('button');
    colorBtn.classList.add('answer-cube');
    colorBtn.style.backgroundColor = color;
    shapes[shapeIdx].appendChild(colorBtn);
    colorBtn.addEventListener('click', event);
  }
  //when example option created
  example_shape_option(color) {
    const colorBtn = document.createElement('button');
    colorBtn.classList.add('answer-cube');
    colorBtn.style.backgroundColor = color;
    modeCon.appendChild(colorBtn);
  }
  //when mode (examples options) is restarting
  clear_mode() {
    modeCon.innerHTML = '';
  }
  //when animated shape gets hidden
  hide_shape(shape) {
    let currentShape = shapes[shape];
    let animation = currentShape.getElementsByClassName('animated')[0];
    animation.style.display = 'none';
  }
  //when shape solved
  solve_shape(shape, com) {
    shapes[shape].classList.add('solved');
    const complimant = document.createElement('div');
    complimant.className = 'sectionComplimant';
    complimant.textContent = com;
    shapes[shape].appendChild(complimant);
  }
  //when a player score is published into
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
