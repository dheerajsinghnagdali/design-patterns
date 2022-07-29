export class Subscribable<TParam> {
  private subscribers: ((value: TParam) => void)[] = [];

  constructor() {}

  subscribe(cb: (value: TParam) => void) {
    if (!this.subscribers.includes(cb)) {
      this.subscribers.push(cb);
    }

    return () => this.unsubscribe(cb);
  }

  unsubscribe(cb: (value: TParam) => void) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== cb,
    );
  }

  notify(value: TParam) {
    this.subscribers.forEach((subscriber) => subscriber(value));
  }
}

const observer = new Subscribable<string>();

const unsubscribe = observer.subscribe(console.log);
observer.notify("Hey, how are you?");
observer.notify("Very well");
unsubscribe();
observer.notify("What about you?");
