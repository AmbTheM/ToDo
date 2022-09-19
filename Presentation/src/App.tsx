import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Containers/LoginPage/LoginPage";
const App: React.FC = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default App;
