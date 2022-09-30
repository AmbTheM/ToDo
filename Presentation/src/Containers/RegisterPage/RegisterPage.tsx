import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./RegisterPage.style.less";
import Button from "../../Components/Button";
import { useUserAPI } from "../../Services/useUserAPI";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/configureStore";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useLabelMessage from "../../Hooks/useLabelMessage";
import LabelMessage from "../../Components/LabelMessage";
import { APIError } from "../../../../Exceptions/APIErrors";

const RegisterPage: React.FC = () => {
  const { AuthenticateUser, CreateUser } = useUserAPI();
  const UserID = useSelector((state: RootState) => state.UserIDReducer);
  const [username, setusername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [repassword, setrepassword] = useState<string>("");

  const [email, setemail] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();

  const [messagestyle, setStyle, message, setMessage] = useLabelMessage();

  return (
    <>
      <form
        className={style.regpage}
        onSubmit={(e) => {
          e.preventDefault();
          CreateUser(username, password, email).catch((err) => {
            setMessage(err.message);
            setStyle("Error");
          });
        }}
      >
        <h1 className={style.headings}>Registering for Todo App.</h1>
        <LabelMessage message={message} style={messagestyle} />
        <input
          className={style.input}
          placeholder="Please Enter Username"
          type="text"
          id="username"
          name="username"
          required={true}
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
          required={true}
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
          required={true}
          onChange={(e) => {
            setrepassword(e.target.value);
          }}
        ></input>
        <input
          className={style.input}
          placeholder="Please Enter Email"
          type="email"
          id="email"
          name="email"
          required={true}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        ></input>
        <div className={style.buttondiv}>
          <Button
            style={style.button}
            text={"Submit"}
            onClick={() => {}}
            type="submit"
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
