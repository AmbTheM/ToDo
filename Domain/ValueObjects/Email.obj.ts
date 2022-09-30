export class Email {
  private _value: string = "";

  constructor(_value: string) {
    if (this.Verify(_value) === true) this._value = _value;
  }

  get value(): string {
    return this._value;
  }

  set value(_value: string) {
    this._value = _value;
  }

  validateEmail = (email: string) => {
    const re: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  Verify(value: string): boolean {
    const flag = this.validateEmail(value);

    if (!flag) {
      throw new Error("Invalid Email");
      return false;
    } else {
      return true;
    }
  }
}
