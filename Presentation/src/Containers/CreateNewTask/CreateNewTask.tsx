import React from "react";
import ReactDom from "react-dom";
import Button from "../../Components/Button";
import style from "./CreateNewTask.style.less";

const CreateNewTask: React.FC = () => {
  return (
    <>
      <div className={style.createnewtask}>
        <h1 className={style.headings}> Create New Task </h1>
        <input
          className={style.input}
          type="text"
          placeholder="Enter Task Name"
          id="TaskName"
          name="TaskName"
        ></input>
        <input
          className={style.input}
          type="text"
          placeholder="Description"
          id="TaskDesc"
          name="TaskDesc"
        ></input>
        <input
          className={style.input}
          type="datetime-local"
          id="TaskDeadline"
          name="TaskDeadline"
        ></input>
        <Button onClick={() => {}} text="Submit" style={style.button} />
      </div>
    </>
  );
};

export default CreateNewTask;
