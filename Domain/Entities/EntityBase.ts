import { v4 as uuidv4 } from "uuid";

export abstract class EntityBase {
  id: string = "";

  constructor(id: string = "") {
    id.length > 0 ? (this.id = id) : this.generateID();
  }

  get ID(): string {
    return this.id;
  }

  generateID() {
    this.id = uuidv4();
  }
}
