import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDom from "react-dom";
import * as ActionCreators from "../Redux/ActionCreators";
import { bindActionCreators } from "redux";
import { RootState } from "../Redux/configureStore";
import { UserAPI } from "./API/UserAPI";
import { IUser } from "../../../DTO/User.DTO";
import { User } from "../../../Domain/Entities/User.entity";
import { APIError } from "../../../Exceptions/APIErrors";

export const useUserAPI = () => {
  const dispatch = useDispatch();
  const { ReadTaskList, ReadUserID } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  const UserDB = new UserAPI();
  const UserID = useSelector((state: RootState) => state.UserIDReducer);

  const AuthenticateUser = async (username: string, password: string) => {
    const response = await UserDB.findByProperty("username", username).catch(
      (err) => {
        throw new APIError(err.message);
      }
    );

    const { Username, Password, Email, _id, __v } = response[0];

    if (Username === username) {
      if (Password === password) {
        ReadUserID(_id);
      } else {
        throw new APIError("Invalid Password");
      }
    }
  };

  const CreateUser = async (
    username: string,
    password: string,
    email: string
  ) => {
    try {
      const user: User = new User(username, password, email);
      const obj: IUser = {
        Username: user.Username,
        Password: user.Password,
        Email: user.Email,
        id: user.ID,
      };
      UserDB.saveToDb(obj).catch((err) => alert(err));
    } catch (error) {
      alert(error);
    }
  };

  return { AuthenticateUser, CreateUser };
};
