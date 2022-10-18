import { TaskDates } from "../ValueObjects/TaskDates.obj";
import { TaskDetails } from "../ValueObjects/TaskDetails.obj";
import { EntityBase } from "./EntityBase";

export class Task extends EntityBase {
  private TaskDetails: TaskDetails;
  private TaskDates: TaskDates;
  private isFinished: Boolean = false;
  private _UserID: string;

  constructor(
    TaskName: string,
    TaskDescription: string,
    TaskDeadline: string,
    UserID: string,
    id: string = "",
    TaskCreatedAt?: string,
    TaskFinishedAt?: string
  ) {
    super(id);
    this.TaskDetails = new TaskDetails(TaskName, TaskDescription);
    this.TaskDates = new TaskDates(TaskDeadline, TaskCreatedAt, TaskFinishedAt);
    this._UserID = UserID;
  }

  FinishTask() {
    this.isFinished = true;
    this.TaskDates.FinishedAt = new Date();
  }

  getIsFinished(): Boolean {
    return this.isFinished;
  }

  SendReminder() {
    //Functionality for sending the reminder of deadline;
  }

  getTimeRemaining(): number {
    return this.TaskDates.timeRemaining();
  }

  getTaskDetails(): TaskDetails {
    return this.TaskDetails;
  }

  getTaskDates(): TaskDates {
    return this.TaskDates;
  }

  setTaskDates(TaskDates: TaskDates) {
    this.TaskDates = TaskDates;
  }

  setTaskDetails(TaskDetails: TaskDetails) {
    this.TaskDetails = TaskDetails;
  }

  get UserID(): string {
    return this._UserID;
  }
}
