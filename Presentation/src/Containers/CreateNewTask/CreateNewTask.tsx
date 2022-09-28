import React, { useState } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../Redux/ActionCreators";
import Button from "../../Components/Button";
import style from "./CreateNewTask.style.less";
import { RootState } from "../../Redux/configureStore";
import { Task } from "../../../../Domain/Entities/Task.entity";
import { useTaskAPI } from "../../Services/useTaskAPI";

interface props {
  showhidestyle: any;
  hide: React.Dispatch<any>;
  editID: string;
}

const CreateNewTask: React.FC<props> = ({ showhidestyle, hide, editID }) => {
  const [TaskName, updateTaskName] = useState<string>("");
  const [TaskDescription, updateTaskDescription] = useState<string>("");
  const [Deadline, updateDeadline] = useState<Date>(new Date(0));
  const { saveTask, editTask } = useTaskAPI();
  const dispatch = useDispatch();
  const { ReadTaskList, ReadUserID } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  const Tasks: Task[] = useSelector((state: RootState) => state.TaskReducer);
  const UserID = useSelector((state: RootState) => state.UserIDReducer);

  const AddNewTask = (
    TaskName: string,
    TaskDescription: string,
    Deadline: Date
  ) => {
    const temp = new Task(
      TaskName,
      TaskDescription,
      Deadline.toDateString(),
      UserID
    );
    ReadTaskList([...Tasks, temp]);
    saveTask(temp);
  };

  const EditTask = (
    TaskName: string,
    TaskDescription: string,
    Deadline: Date
  ) => {
    const temp = [...Tasks];
    const index = temp.findIndex((task) => {
      return task.ID === editID;
    });
    const editedtask = new Task(
      TaskName,
      TaskDescription,
      Deadline.toDateString(),
      temp[index].UserID,
      temp[index].ID,
      temp[index].getTaskDates().CreatedAt.toDateString(),
      temp[index].getTaskDates().FinishedAt.toDateString()
    );
    temp[index].setTaskDetails(editedtask.getTaskDetails());
    temp[index].setTaskDates(editedtask.getTaskDates());
    ReadTaskList(temp);

    editTask(editedtask, editID);
  };
  return (
    <>
      <div className={style.createnewpagecenter}>
        <form
          className={showhidestyle}
          onSubmit={(e) => {
            e.preventDefault();
            editID.length > 0
              ? EditTask(TaskName, TaskDescription, Deadline)
              : AddNewTask(TaskName, TaskDescription, Deadline);
          }}
        >
          <h1 className={style.headings}>
            {editID.length > 0 ? "Edit Task" : "Create New Task"}
          </h1>
          <h1
            className={style.closebutton}
            onClick={() => {
              hide(style.createnewtaskhidden);
            }}
          >
            X
          </h1>
          <input
            className={style.input}
            type="text"
            placeholder="Enter Task Name"
            id="TaskName"
            name="TaskName"
            required={true}
            onChange={(e) => {
              updateTaskName(e.target.value);
            }}
          ></input>
          <input
            className={style.input}
            type="text"
            placeholder="Description"
            id="TaskDesc"
            name="TaskDesc"
            required={true}
            onChange={(e) => {
              updateTaskDescription(e.target.value);
            }}
          ></input>
          <input
            className={style.input}
            type="datetime-local"
            id="TaskDeadline"
            name="TaskDeadline"
            required={true}
            onChange={(e) => {
              updateDeadline(new Date(e.target.value));
            }}
          ></input>
          <Button
            onClick={() => {}}
            text="Submit"
            style={style.button}
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default CreateNewTask;
