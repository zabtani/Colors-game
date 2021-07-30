class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    modeBtn.addEventListener('click', () => {
      this.model.change_optional_colors();
    });
    startBtn.addEventListener('click', () => {
      this.model.validation(input.value, this.error_in);
    });
    nextBtn.addEventListener('click', () => {
      this.model.new_round();
    });
    backBtn.addEventListener('click', () => {
      this.model.ini();
    });
  }
  ini() {
    this.model.ini();
  }
  restart_view() {
    this.view.clear_main();
  }
  initial_view() {
    this.view.welcome();
  }
  example_option(option) {
    this.view.example_shape_option(option);
  }
  control_title(coloredTitle) {
    this.view.game_title(coloredTitle);
  }
  err(error) {
    this.view.error(error);
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
  lost(scores) {
    this.view.lost_round(scores);
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
