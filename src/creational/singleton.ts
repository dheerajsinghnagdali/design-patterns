export class Settings {
  static instance: Settings;
  public readonly mode = "dark";

  private constructor() {}

  static getInstance() {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  }
}

// throws error
// const settings = new Settings();
