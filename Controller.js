class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    modeBtn.addEventListener('click', () => {
      this.view.clear_mode();
      this.model.change_options();
    });
    startBtn.addEventListener('click', () => {
      this.model.validation(input.value, this.error_in);
    });
    nextBtn.addEventListener('click', () => {
      this.model.new_round();
    });
    backBtn.addEventListener('click', () => {
      this.model.colored_title(this.model.gameName);
      this.view.restart();
    });
  }
  ini() {
    this.model.ini();
  }
  match_start() {
    this.view.match_start();
  }
  example_option(option) {
    this.view.example_shape_option(option);
  }
  control_title(coloredTitle) {
    this.view.game_title(coloredTitle);
  }
  error(error) {
    this.view.validation_error(error);
  }
  reverse_err() {
    this.view.remove_error();
  }
  in_round(pName) {
    this.view.in_round(pName);
  }
  animate(color) {
    this.view.animated_shape(color);
  }
  solve(item, complimant) {
    this.view.solve_shape(item, complimant);
  }
  won(lvl, complimant, pName) {
    this.view.won_round(lvl, complimant, pName);
  }
  lost(lvl) {
    this.view.lost_round(lvl);
  }
  hide(item) {
    this.view.hide_shape(item);
  }
  option(item, answer, event) {
    this.view.shape_option(item, answer, event);
  }
  player_score(player) {
    this.view.publish_player_score(player);
  }
}

const app = new Controller(new Model(), new View());
app.ini();
