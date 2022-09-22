import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDom from "react-dom";
import * as ActionCreators from "../Redux/ActionCreators";
import { TaskAPI } from "./API/TaskAPI";
import { bindActionCreators } from "redux";
import { RootState } from "../Redux/configureStore";

export const useTaskAPI = () => {
  const dispatch = useDispatch();
  const { ReadTaskList, ReadUserID } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  const TaskList = useSelector((state: RootState) => state.TaskReducer);
  const UserID = useSelector((state: RootState) => state.UserIDReducer);

  const TaskDB = new TaskAPI(UserID);

  const getAllTasks = async () => {
    ReadTaskList(await TaskDB.readAllFromDb());
  };

  return [getAllTasks];
};
