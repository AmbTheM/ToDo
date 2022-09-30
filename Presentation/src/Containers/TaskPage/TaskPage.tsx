import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Task } from "../../../../Domain/Entities/Task.entity";
import Button from "../../Components/Button";
import TaskList from "../../Components/TaskList";
import { RootState } from "../../Redux/configureStore";
import { useTaskAPI } from "../../Services/useTaskAPI";
import CreateNewTask from "../CreateNewTask/CreateNewTask";
import style from "./TaskPage.style.less";
import * as ActionCreators from "../../Redux/ActionCreators";

const TaskPage: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const { getAllTasks, deleteTask } = useTaskAPI();
  const Tasks: Task[] = useSelector((state: RootState) => state.TaskReducer);
  const UserID = useSelector((state: RootState) => state.UserIDReducer);
  const [isShown, Show] = useState<any>(style.createnewtaskhidden);
  const [editID, setEditID] = useState<string>("");

  const dispatch = useDispatch();
  const { ReadTaskList, ReadUserID } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  useEffect(() => {
    UserID.length !== 0 ? getAllTasks() : navigate("/");
  }, []);

  const openEditModal = (id: string) => {
    Show(style.createnewtask);
    setEditID(id);
  };

  const List = () => {
    if (Tasks.length > 0) {
      return <TaskList Tasks={Tasks} del={deleteTask} edit={openEditModal} />;
    } else {
      return (
        <h1 className={style.emptytext}>
          List is empty, click on Add Task to get started
        </h1>
      );
    }
  };

  return (
    <>
      <CreateNewTask showhidestyle={isShown} hide={Show} editID={editID} />

      <div className={style.taskpage}>
        <div className={style.taskpageflex}>
          <Button
            text="Add Task"
            style={style.button}
            onClick={() => {
              Show(style.createnewtask);
            }}
          />

          <div
            className={style.emojibutton}
            onClick={() => {
              ReadTaskList([]);
              ReadUserID("");
              navigate("/");
            }}
          >
            📴
          </div>
        </div>
        <div>{List()}</div>
        <Outlet />
      </div>
    </>
  );
};

export default TaskPage;
