import crypto from "crypto";

export abstract class EntityBase {
  id: string = "";

  constructor(id: string = "") {
    id !== "" ? (this.id = id) : this.generateID();
  }

  get ID(): string {
    return this.id;
  }

  generateID() {
    this.id = crypto.randomUUID();
  }
}
