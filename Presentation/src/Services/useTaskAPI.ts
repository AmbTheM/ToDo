import { useSelector, useDispatch } from "react-redux";
import * as ActionCreators from "../Redux/ActionCreators";
import { TaskAPI } from "./API/TaskAPI";
import { bindActionCreators } from "redux";
import { RootState } from "../Redux/configureStore";
import { ITask } from "../../../DTO/Task.DTO";
import { Task } from "../../../Domain/Entities/Task.entity";

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
    const temp: any[] = await TaskDB.readAllFromDb();
    const taskarray: Task[] = [];
    temp.map((item) => {
      taskarray.push(
        new Task(
          item.TaskName,
          item.TaskDescription,
          item.Deadline,
          item.UserId,
          item._id,
          item.CreatedAt,
          item.FinishedAt
        )
      );
      return item;
    });

    ReadTaskList(taskarray);
  };

  const saveTask = async (temp: Task) => {
    const obj: ITask = {
      TaskName: temp.getTaskDetails().Name,
      TaskDescription: temp.getTaskDetails().Description,
      Deadline: temp.getTaskDates().Deadline,
      CreatedAt: temp.getTaskDates().CreatedAt,
      FinishedAt: temp.getTaskDates().FinishedAt,
      id: temp.ID,
      UserId: temp.UserID,
    };
    TaskDB.saveToDb(obj);
  };

  const deleteTask = async (id: string) => {
    TaskDB.deleteFromDb(id).catch((err) => alert(err));
    const temp: Task[] = [...TaskList];
    const index = temp.findIndex((task) => {
      return task.ID === id;
    });
    temp.splice(index, 1);

    ReadTaskList(temp);
  };

  const editTask = async (temp: Task, id: string) => {
    const obj: ITask = {
      TaskName: temp.getTaskDetails().Name,
      TaskDescription: temp.getTaskDetails().Description,
      Deadline: temp.getTaskDates().Deadline,
      CreatedAt: temp.getTaskDates().CreatedAt,
      FinishedAt: temp.getTaskDates().FinishedAt,
      id: temp.ID,
      UserId: temp.UserID,
    };

    TaskDB.updateDb(id, obj);
  };
  return { getAllTasks, saveTask, deleteTask, editTask };
};
