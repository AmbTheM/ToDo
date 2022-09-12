export class TaskDates {
  private CreatedAt: Date;
  private Deadline: Date = new Date(0);
  private FinishedAt: Date = new Date(0);

  constructor() {
    this.CreatedAt = new Date();
  }

  set deadline(_Deadline: Date) {
    this.Deadline = new Date(_Deadline.getTime());
  }

  get deadline(): Date {
    return this.Deadline;
  }

  get createdat(): Date {
    return this.CreatedAt;
  }

  set finishedat(_FinsihedAt: Date) {
    this.FinishedAt = new Date(_FinsihedAt.getTime());
  }

  get finsihedat(): Date {
    return this.FinishedAt;
  }

  timeRemaining(): number {
    let current: Date = new Date();

    return current.getTime() - this.Deadline.getTime();
  }
}
