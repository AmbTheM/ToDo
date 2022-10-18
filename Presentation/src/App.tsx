import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Containers/LoginPage/LoginPage";
import RegisterPage from "./Containers/RegisterPage/RegisterPage";
import TaskPage from "./Containers/TaskPage/TaskPage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/list" element={<TaskPage />} />
      </Routes>
    </>
  );
};

export default App;
