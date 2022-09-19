import React from "react";
import ReactDOM from "react-dom";

import Button from "../../Components/Button";

const LoginPage: React.FC = () => {
  return (
    <>
      <form className="login-page">
        <h1 className="headings">Welcome to Todo App.</h1>
        <input
          className="input"
          placeholder="Please Enter Username"
          type="text"
          id="username"
          name="username"
        ></input>
        <input
          className="input"
          placeholder="Please Enter Password"
          type="password"
          id="password"
          name="password"
        ></input>
        <div className="button-div">
          <Button
            text={"Login"}
            onClick={() => {
              alert("Currently not working");
            }}
          ></Button>
          <Button
            text={"Register"}
            onClick={() => {
              alert("Currently not working");
            }}
          ></Button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
