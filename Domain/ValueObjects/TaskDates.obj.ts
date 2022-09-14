export interface ITaskDates {
  _CreatedAt: Date;
  _Deadline: Date;
  _FinishedAt: Date;
}

export class TaskDates {
  private _CreatedAt: Date;
  private _Deadline: Date;
  private _FinishedAt: Date;

  constructor(_Deadline: Date) {
    this._CreatedAt = new Date();
    this._Deadline = _Deadline;
    this._FinishedAt = new Date(0);
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
