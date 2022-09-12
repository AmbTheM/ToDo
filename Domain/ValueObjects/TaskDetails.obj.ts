export class TaskDetails {
  private Name: string = "";
  private Description: string = "";

  set name(_Name: string) {
    this.Name = _Name;
  }

  get name(): string {
    return this.Name;
  }

  set description(_Description: string) {
    this.Description = _Description;
  }

  get description(): string {
    return this.Description;
  }
}
