export class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraud?: boolean,
  ) {}

  addKetchup() {
    this.ketchup = true;
    return this;
  }

  addMustard() {
    this.mustard = true;
    return this;
  }

  addKraud() {
    this.kraud = true;
    return this;
  }
}

const lunch = new HotDog("gluten free");

lunch.addKetchup();
lunch.addKraud();
lunch.addKraud();

console.log(lunch);
