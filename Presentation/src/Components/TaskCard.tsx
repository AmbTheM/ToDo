import React from "react";
import ReactDom from "react";
import { ITask } from "../../../DTO/Task.DTO";
import style from "./TaskCard.style.less";

interface props extends ITask {
  del: (id: string) => void;
  edit: (id: string) => void;
}

const TaskCard: React.FC<props> = ({
  TaskName,
  TaskDescription,
  CreatedAt,
  Deadline,
  FinishedAt,
  id,
  del,
  edit,
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
          <p>Deadline: {Deadline.toLocaleString()}</p>
          <div className={style.emojicontainer}>
            <p
              className={style.emojibutton}
              onClick={() => {
                edit(id);
              }}
            >
              ✏️
            </p>

            <p
              className={style.emojibutton}
              onClick={() => {
                del(id);
              }}
            >
              🗑
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
