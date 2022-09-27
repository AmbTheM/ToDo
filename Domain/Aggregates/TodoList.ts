import { Task } from "../Entities/Task.entity";
import { User } from "../Entities/User.entity";
import { ITaskDates } from "../ValueObjects/TaskDates.obj";
import { ITaskDetails } from "../ValueObjects/TaskDetails.obj";

export class TodoList {
  private _TaskList: Task[] = [];
  private UserID: string;

  constructor(UserID: string) {
    this.UserID = UserID;
  }

  AddNewTask(
    TaskName: string,
    TaskDescription: string,
    TaskDeadline: string,
    UserID: string
  ) {
    this._TaskList = [
      ...this._TaskList,
      new Task(TaskName, TaskDescription, TaskDeadline, UserID),
    ];
  }

  get TaskList() {
    return [...this._TaskList];
  }
  set TaskList(Tasks: Task[]) {
    this._TaskList = [...this._TaskList, ...Tasks];
  }

  FinishTask(id: string) {
    const Index: number = this._TaskList.findIndex((Task) => {
      return Task.ID === id;
    });

    this._TaskList[Index].FinishTask();
  }

  SendReminder() {
    //Functionality for sending the reminder of deadline;
  }

  getTimeRemaining(id: string): number {
    const Index: number = this._TaskList.findIndex((Task) => {
      return Task.ID === id;
    });

    return this._TaskList[Index].getTimeRemaining();
  }

  getDetails(id: string): ITaskDetails {
    const Index: number = this._TaskList.findIndex((Task) => {
      return Task.ID === id;
    });

    return {
      _Name: this._TaskList[Index].getTaskDetails().Name,
      _Description: this._TaskList[Index].getTaskDetails().Description,
    };
  }

  getDates(id: string): ITaskDates {
    const Index: number = this._TaskList.findIndex((Task) => {
      return Task.ID === id;
    });

    return {
      _CreatedAt: this._TaskList[Index].getTaskDates().CreatedAt,
      _Deadline: this._TaskList[Index].getTaskDates().Deadline,
      _FinishedAt: this._TaskList[Index].getTaskDates().FinishedAt,
    };
  }
}
