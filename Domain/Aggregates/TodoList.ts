import { Task } from "../Entities/Task.entity";
import { ITaskDates } from "../ValueObjects/TaskDates.obj";
import { ITaskDetails } from "../ValueObjects/TaskDetails.obj";

export class TodoList {
  private TaskList: Task[] = [];

  constructor() {}

  AddNewTask(TaskName: string, TaskDescription: string, TaskDeadline: Date) {
    this.TaskList = [
      ...this.TaskList,
      new Task(TaskName, TaskDescription, TaskDeadline),
    ];
  }

  getList() {
    return [...this.TaskList];
  }

  FinishTask(id: string) {
    const Index: number = this.TaskList.findIndex((Task) => {
      return Task.ID == id;
    });

    this.TaskList[Index].FinishTask();
  }

  SendReminder() {
    //Functionality for sending the reminder of deadline;
  }

  getTimeRemaining(id: string): number {
    const Index: number = this.TaskList.findIndex((Task) => {
      return Task.ID == id;
    });

    return this.TaskList[Index].getTimeRemaining();
  }

  getDetails(id: string): ITaskDetails {
    const Index: number = this.TaskList.findIndex((Task) => {
      return Task.ID == id;
    });

    return {
      _Name: this.TaskList[Index].getTaskDetails().Name,
      _Description: this.TaskList[Index].getTaskDetails().Description,
    };
  }

  getDates(id: string): ITaskDates {
    const Index: number = this.TaskList.findIndex((Task) => {
      return Task.ID == id;
    });

    return {
      _CreatedAt: this.TaskList[Index].getTaskDates().CreatedAt,
      _Deadline: this.TaskList[Index].getTaskDates().Deadline,
      _FinishedAt: this.TaskList[Index].getTaskDates().FinishedAt,
    };
  }
}
