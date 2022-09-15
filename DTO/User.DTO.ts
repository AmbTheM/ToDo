export class UserDTO {
  private _id: string;
  private _Username: string;
  private _Password: string;

  constructor(id: string, username: string, password: string) {
    this._Password = password;
    this._id = id;
    this._Username = username;
  }

  get id(): string {
    return this._id;
  }
  get Username(): string {
    return this._Username;
  }
  get Password(): string {
    return this._Password;
  }
}
