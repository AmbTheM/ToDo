import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./RegisterPage.style.less";
import Button from "../../Components/Button";
import { useUserAPI } from "../../Services/useUserAPI";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/configureStore";
import { NavigateFunction, useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const { AuthenticateUser, CreateUser } = useUserAPI();
  const UserID = useSelector((state: RootState) => state.UserIDReducer);
  const [username, setusername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <form className={style.regpage}>
        <h1 className={style.headings}>Registering for Todo App.</h1>
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
        <input
          className={style.input}
          placeholder="Please Enter Password Again"
          type="password"
          id="repassword"
          name="repassword"
        ></input>
        <input
          className={style.input}
          placeholder="Please Enter Email"
          type="email"
          id="email"
          name="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        ></input>
        <div className={style.buttondiv}>
          <Button
            style={style.button}
            text={"Submit"}
            onClick={() => {
              CreateUser(username, password, email);
            }}
          ></Button>
          <Button
            style={style.button}
            text={"Cancel"}
            onClick={() => {
              navigate("/");
            }}
          ></Button>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
