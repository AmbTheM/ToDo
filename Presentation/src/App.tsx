import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 } from "uuid";
import TaskCard from "./Components/TaskCard";
import CreateNewTask from "./Containers/CreateNewTask/CreateNewTask";
import LoginPage from "./Containers/LoginPage/LoginPage";
import RegisterPage from "./Containers/RegisterPage/RegisterPage";
const App: React.FC = () => {
  return (
    <>
      <TaskCard
        TaskName="Get Boba Tea"
        TaskDescription="Hehehea ✏️"
        CreatedAt={new Date()}
        Deadline={new Date(Date.now() + 1000000000)}
        FinishedAt={new Date(0)}
        id={v4()}
        UserId={v4()}
      />
      <LoginPage />
      <RegisterPage />

      <CreateNewTask />
    </>
  );
};

export default App;
