class ProductionLogger {
  log(...messages: string[]) {}

  erorr(...errors: string[]) {
    console.error(...errors);
  }

  warn(...warnings: string[]) {
    console.warn(...warnings);
  }

  debug(...messages: string[]) {}
}

class DevelopmentLogger {
  log(...messages: string[]) {
    console.log(...messages);
  }

  erorr(...errors: string[]) {
    console.error(...errors);
  }

  warn(...warnings: string[]) {
    console.warn(...warnings);
  }

  debug(...messages: string[]) {
    console.debug(...messages);
  }
}

export class Logger {
  createLogger(mode: string) {
    if (mode === "development") {
      return new DevelopmentLogger();
    }
    return new ProductionLogger();
  }
}

const developmentLogger = () => ({
  log(...messages: string[]) {
    console.log(...messages);
  },
  erorr(...errors: string[]) {
    console.error(...errors);
  },
  warn(...warnings: string[]) {
    console.warn(...warnings);
  },
  debug(...messages: string[]) {
    console.debug(...messages);
  },
});

const productionLogger = () => ({
  log(...messages: string[]) {
    console.log(...messages);
  },
  erorr(...errors: string[]) {
    console.error(...errors);
  },
  warn(...warnings: string[]) {
    console.warn(...warnings);
  },
  debug(...messages: string[]) {
    console.debug(...messages);
  },
});

export function createLogger(mode: string) {
  if (mode === "development") {
    return developmentLogger();
  }

  return productionLogger();
}
