class Model {
  constructor() {
    this.lvl = 1;
    this.playersData = SCORES || DUMMY_PLAYES;
    this.compliments = COMPLIMANTS;
    this.options = COLOR_STACK_OPTIONS;
    this.titleColors = TITLE_COLORS;
    this.gameName = GAME_NAME;
    this.optionalAnswers = COLOR_STACK_OPTIONS[0];
  }
  ini() {
    this.colored_title(this.gameName);
    this.options_example();
  }
  change_options = () => {
    let chosen = this.optionalAnswers;
    chosen =
      chosen === this.options[0]
        ? this.options[1]
        : chosen === this.options[1]
        ? this.options[2]
        : this.options[2]
        ? this.options[0]
        : chosen;
    this.optionalAnswers = chosen;
    this.options_example();
  };
  options_example = () => {
    for (this.optionalAnswer of this.optionalAnswers) {
      app.example_option(this.optionalAnswer);
    }
  };
  colored_title(text) {
    clearInterval(this.titleInterval);
    let action = () => {
      let coloredTitle = colorString(text, this.titleColors);
      app.control_title(coloredTitle);
    };
    action();
    this.titleInterval = setInterval(() => {
      action();
    }, 500);
  }
  validation(inputValue) {
    const error = inputValidation(inputValue, this.playersData);
    !error ? this.validation_sucsses(inputValue) : this.validation_fail(error);
  }
  validation_fail(error) {
    app.error(error);
    setTimeout(() => {
      app.error(false);
    }, 1000);
  }
  validation_sucsses(inputValue) {
    this.playerName = inputValue;
    this.new_round();
  }
  random_compliment() {
    return this.compliments[randomInt(0, this.compliments.length - 1)];
  }
  new_round() {
    this.lvl === 1 && app.match_start();
    app.in_round(this.playerName);
    this.unsolvedItems = this.lvl;
    let roundCorrectAnswers = [];
    let lastAnswer;
    for (let question = 0; question < this.lvl; question++) {
      let answers = this.optionalAnswers;
      let itemAnswer = answers[randomInt(0, answers.length - 1)];
      if (itemAnswer === lastAnswer) {
        question--;
      } else {
        roundCorrectAnswers.push(itemAnswer);
        app.animate(itemAnswer);
        lastAnswer = itemAnswer;
      }
    }
    setTimeout(() => {
      this.build_item_options(roundCorrectAnswers);
    }, 5000);
  }

  check_item_answer(answerValue, item) {
    answerValue === true ? this.right_answer(item) : this.wrong_answer();
  }
  right_answer(item) {
    app.solve(item, this.random_compliment());
    this.unsolvedItems--;
    this.unsolvedItems === 0 && this.won_round();
  }
  won_round() {
    this.colored_title('WON LVL ' + this.lvl);
    this.lvl++;
    clearInterval(this.titleInterval);
    app.won(this.lvl, this.random_compliment(), this.playerName);
  }
  sign_player_score() {
    this.playersData.push({ name: this.playerName, score: this.lvl - 1 });
    this.playersData = this.playersData.sort((a, b) => b.score - a.score);
    localStorage.setItem('scores', JSON.stringify(this.playersData));
  }
  wrong_answer() {
    clearInterval(this.titleInterval);
    this.sign_player_score();
    for (let player of this.playersData) {
      app.player_score(player);
    }
    app.lost(this.lvl);
    this.lvl = 1;
    this.playerName = undefined;
  }

  build_item_options(roundCorrectAnswers) {
    for (this.item = 0; this.item < this.lvl; this.item++) {
      app.hide(this.item);
      for (this.optionalAnswer of this.optionalAnswers) {
        const isCorrect =
          this.optionalAnswer === roundCorrectAnswers[this.item] ? true : false;
        app.option(
          this.item,
          this.optionalAnswer,
          this.check_item_answer.bind(this, isCorrect, this.item)
        );
      }
    }
  }
}
