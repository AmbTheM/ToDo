import { Task } from "../../../Domain/Entities/Task.entity";
import TaskCard from "./TaskCard";
import React from "react";

interface props {
  Tasks: Task[];
  edit: any;
  del: any;
}

const TaskList: React.FC<props> = ({ Tasks, edit, del }) => {
  return (
    <>
      {Tasks.map((Task) => {
        return (
          <TaskCard
            key={Task.ID}
            TaskName={Task.getTaskDetails().Name}
            TaskDescription={Task.getTaskDetails().Description}
            CreatedAt={Task.getTaskDates().CreatedAt}
            Deadline={Task.getTaskDates().Deadline}
            FinishedAt={Task.getTaskDates().FinishedAt}
            id={Task.ID}
            UserId=""
            del={del}
            edit={edit}
          />
        );
      })}
    </>
  );
};

export default TaskList;
