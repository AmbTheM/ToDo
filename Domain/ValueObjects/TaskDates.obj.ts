export interface ITaskDates {
  _CreatedAt: Date;
  _Deadline: Date;
  _FinishedAt: Date;
}

export class TaskDates {
  private _CreatedAt: Date;
  private _Deadline: Date;
  private _FinishedAt: Date;

  constructor(
    _Deadline: string,
    _CreatedAt: string = "",
    _FinishedAt: string = ""
  ) {
    _CreatedAt.length > 0
      ? (this._CreatedAt = new Date(_CreatedAt))
      : (this._CreatedAt = new Date());
    this._Deadline = new Date(_Deadline);
    _FinishedAt.length > 0
      ? (this._FinishedAt = new Date(_FinishedAt))
      : (this._FinishedAt = new Date());
  }

  set Deadline(_Deadline: Date) {
    this._Deadline = new Date(_Deadline.getTime());
  }

  get Deadline(): Date {
    return this._Deadline;
  }

  get CreatedAt(): Date {
    return this._CreatedAt;
  }

  set FinishedAt(_FinsihedAt: Date) {
    this._FinishedAt = new Date(_FinsihedAt.getTime());
  }

  get FinishedAt(): Date {
    return this._FinishedAt;
  }

  timeRemaining(): number {
    let current: Date = new Date();

    return this._Deadline.getTime() - current.getTime();
  }
}
