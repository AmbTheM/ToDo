import crypto from "crypto";

export abstract class EntityBase {
  id: string = "";

  constructor() {
    this.generateID();
  }

  get ID(): string {
    return this.id;
  }

  generateID() {
    this.id = crypto.randomUUID();
  }
}
