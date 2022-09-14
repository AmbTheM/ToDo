export interface ITaskDetails {
  _Name: string;
  _Description: string;
}

export class TaskDetails {
  private _Name: string = "";
  private _Description: string = "";

  constructor(_Name: string, _Description: string) {
    this._Name = _Name;
    this._Description = _Description;
  }

  set Name(_Name: string) {
    this._Name = _Name;
  }

  get Name(): string {
    return this._Name;
  }

  set Description(_Description: string) {
    this._Description = _Description;
  }

  get Description(): string {
    return this._Description;
  }
}
