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
    const response = await UserDB.findDB(username, password).catch((err) => {
      throw new APIError(err.message);
    });
    ReadUserID(response.token);
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
      await UserDB.saveToDb(obj);
    } catch (error) {
      throw new APIError(`${error}`);
    }
  };

  return { AuthenticateUser, CreateUser };
};
