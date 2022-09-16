import { Email } from "../ValueObjects/Email.obj";
import { EntityBase } from "./EntityBase";

export class User extends EntityBase {
  private _Username: string;
  private _Password: string;
  private _Email: Email;

  constructor(
    _Username: string,
    _Password: string,
    _Email: string,
    id: string = ""
  ) {
    super(id);

    this._Username = _Username;
    this._Password = _Password;
    this._Email = new Email(_Email);
  }

  get Username(): string {
    return this._Username;
  }

  get Password(): string {
    return this._Password;
  }

  set Password(_Password: string) {
    this._Password = _Password;
  }

  get Email(): string {
    return this._Email.value;
  }
}
