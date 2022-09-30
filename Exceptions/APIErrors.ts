export class APIError extends Error {
  constructor(message: string) {
    super();
    this.name = "APIError";
    this.message = message;
  }

  toJSON() {
    return {
      error: {
        name: this.name,
        message: this.message,
        stacktrace: this.stack,
      },
    };
  }
}
