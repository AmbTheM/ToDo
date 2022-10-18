import { Task } from "../../../../Domain/Entities/Task.entity";

export const USERID = "USERID";
export const TASKLIST = "TASKLIST";
export interface UserID {
  type: string;
  payload: string;
}

export interface TaskList {
  type: string;
  payload: Task[];
}
