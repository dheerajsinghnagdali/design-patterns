interface State {
  think(): string;
}

class HappyState implements State {
  think(): string {
    return "I am happy";
  }
}

class SadState implements State {
  think(): string {
    return "I am in bad mood";
  }
}

export class Human implements State {
  state: State = new HappyState();

  think(): string {
    return this.state.think();
  }

  changeState(state: State) {
    this.state = state;
  }
}

const human = new Human();
human.think();
human.changeState(new SadState());
human.think();
