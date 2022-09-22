import React from "react";
import ReactDom from "react";
import { ITask } from "../../../DTO/Task.DTO";
import style from "./TaskCard.style.less";

const TaskCard: React.FC<ITask> = ({
  TaskName,
  TaskDescription,
  CreatedAt,
  Deadline,
  FinishedAt,
  id,
}) => {
  return (
    <>
      <div className={style.taskbody} key={id}>
        <div className={style.heading}>
          <h1 className={style.taskname}>{TaskName}</h1>
          <p className={style.createdat}>{CreatedAt.toLocaleString()}</p>
        </div>
        <p className={style.description}> {TaskDescription}</p>
        <div className={style.footing}>
          <p>{Deadline.toLocaleString()}</p>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
