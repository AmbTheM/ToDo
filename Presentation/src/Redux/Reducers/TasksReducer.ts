import { Task } from "../../../../Domain/Entities/Task.entity";
import { TASKLIST, TaskList } from "../ActionTypes/ActionTypes";

export default function TaskReducer(state: Task[] = [], action: TaskList) {
  switch (action.type) {
    case TASKLIST:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
