import { Dispatch } from "redux";
import { Task } from "../../../../Domain/Entities/Task.entity";
import { TASKLIST } from "../ActionTypes/ActionTypes";

export function ReadTaskList(Tasks: Task[]) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: TASKLIST,
      payload: Tasks,
    });
  };
}
