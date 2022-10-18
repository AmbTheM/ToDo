export class AuthenticationError extends Error {
  constructor(message: string) {
    super();
    this.name = "AuthenticationError";
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
