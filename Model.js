class Model {
  constructor() {
    this.lvl = 12;
    this.playersData = SCORES || [];
    this.compliments = COMPLIMANTS;
    this.colors = COLOR_STACK_OPTIONS;
    this.titleColors = TITLE_COLORS;
    this.gameName = GAME_NAME;
    this.optionalAnswers = COLOR_STACK_OPTIONS[0];
  }
  ini() {
    app.initial_view();
    this.set_colored_title(this.gameName);
    app.restart_view();
    this.optional_colors();
  }
  change_optional_colors = () => {
    app.restart_view();
    let chosen = this.optionalAnswers;
    chosen =
      chosen === this.colors[0]
        ? this.colors[1]
        : chosen === this.colors[1]
        ? this.colors[2]
        : this.colors[2]
        ? this.colors[0]
        : chosen;

    this.optionalAnswers = chosen;
    this.optional_colors();
  };
  optional_colors = () => {
    for (this.optionalAnswer of this.optionalAnswers) {
      app.example_option(this.optionalAnswer);
    }
  };
  set_colored_title(text) {
    clearInterval(this.titleInterval);
    let colorTitle = () => {
      let coloredTitle = colorString(text, this.titleColors);
      app.control_title(coloredTitle);
    };
    colorTitle();
    this.titleInterval = setInterval(() => {
      colorTitle();
    }, 500);
  }

  validation(inputValue) {
    const isError = inputValidation(inputValue, this.playersData);
    !isError
      ? this.validation_sucsses(inputValue)
      : this.validation_fail(isError);
  }
  validation_fail(error) {
    app.err(error);
    setTimeout(() => {
      app.reverse_err();
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
    app.in_round(this.playerName);
    this.unsolvedItems = this.lvl;
    let roundCorrectAnswers = [];
    let lastAnswer;
    for (this.items = 0; this.items < this.lvl; this.items++) {
      let answers = this.optionalAnswers;
      console.log(this.optionalAnswers);
      let itemAnswer = answers[randomInt(0, answers.length - 1)];
      if (itemAnswer === lastAnswer) {
        this.items--;
      } else {
        roundCorrectAnswers.push(itemAnswer);
        app.animate(itemAnswer);
        lastAnswer = itemAnswer;
      }
    }
    console.log(roundCorrectAnswers);
    setTimeout(() => {
      this.build_item_options(roundCorrectAnswers);
    }, 5500);
  }

  check_item_answer(answerValue, item) {
    answerValue === true ? this.rightAnswer(item) : this.wrongAnswer();
  }
  rightAnswer(item) {
    app.solve(item, this.random_compliment());
    this.unsolvedItems--;
    if (this.unsolvedItems === 0) {
      this.won_round();
    }
  }
  won_round() {
    this.lvl++;
    clearInterval(this.titleInterval);
    app.won(this.lvl, this.random_compliment(), this.playerName);
    this.set_colored_title('WON LVL ' + this.lvl - 1);
  }

  wrongAnswer() {
    clearInterval(this.titleInterval);
    this.playersData.push({ name: this.playerName, score: this.lvl });
    localStorage.setItem('scores', JSON.stringify(this.playersData));

    this.lvl = 1;
    this.playerName = undefined;
    for (let player of this.playersData) {
      app.player_score(player);
    }

    app.lost(this.scores);
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
