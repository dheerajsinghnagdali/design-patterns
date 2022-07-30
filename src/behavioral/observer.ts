export class Subscribable<TParam> {
  private subscribers: ((value: TParam) => void)[] = [];

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

const createSubscribable = <TParam>() => {
  let subscribers: ((value: TParam) => void)[] = [];

  return {
    subscribe: (cb: (value: TParam) => void) => {
      if (!subscribers.includes(cb)) {
        subscribers.push(cb);
      }
      return () => {
        subscribers = subscribers.filter((subscriber) => subscriber !== cb);
      };
    },
    notify: (value: TParam) => {
      subscribers.forEach((subscriber) => subscriber(value));
    },
  };
};

const sub = createSubscribable<string>();
const _unsubscribe = sub.subscribe(console.log);
sub.notify("Hey, how are you?");
sub.notify("Very well");
_unsubscribe();
sub.notify("What about you?");
