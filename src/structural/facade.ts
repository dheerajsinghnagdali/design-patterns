class PlumbingSystem {
  setPressure(volume: number) {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  setVoltage(volt: number) {}
  turnOn() {}
  turnOff() {}
}

export class House {
  private plumbing = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  turnOnSystem() {
    this.electrical.setVoltage(240);
    this.electrical.turnOn();
    this.plumbing.setPressure(100);
    this.plumbing.turnOn();
  }

  turnOffSystem() {
    this.electrical.turnOff();
    this.plumbing.turnOff();
  }
}
