import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import style from "./LoginPage.style.less";
import Button from "../../Components/Button";
import { useUserAPI } from "../../Services/useUserAPI";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/configureStore";
import { NavigateFunction, useNavigate } from "react-router-dom";

import Message from "../../Components/Message";
import LabelMessage from "../../Components/LabelMessage";
import useLabelMessage from "../../Hooks/useLabelMessage";

const LoginPage: React.FC = () => {
  const { AuthenticateUser } = useUserAPI();
  const UserID = useSelector((state: RootState) => state.UserIDReducer);
  const [username, setusername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();
  const Submit = (username: string, password: string) => {
    AuthenticateUser(username, password).catch((err) => {
      setMessage(err.message);
      setStyle("Error");
    });
  };

  const [messagestyle, setStyle, message, setMessage] = useLabelMessage();

  useEffect(() => {
    if (UserID.length > 0) navigate(`/list`);
  }, [UserID]);

  return (
    <>
      <LabelMessage message={message} style={messagestyle} />

      <form className={style.loginpage}>
        <h1 className={style.headings}>Welcome to Todo App.</h1>
        <input
          className={style.input}
          placeholder="Please Enter Username"
          type="text"
          id="username"
          name="username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        ></input>
        <input
          className={style.input}
          placeholder="Please Enter Password"
          type="password"
          id="password"
          name="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
        <div className={style.buttondiv}>
          <Button
            style={style.button}
            text={"Login"}
            onClick={async () => {
              Submit(username, password);
            }}
          ></Button>
          <Button
            style={style.button}
            text={"Register"}
            onClick={() => {
              navigate("/register");
            }}
          ></Button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
