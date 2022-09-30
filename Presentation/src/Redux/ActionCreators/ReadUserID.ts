import { Dispatch } from "redux";
import { USERID } from "../ActionTypes/ActionTypes";

export function ReadUserID(UserID: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: USERID,
      payload: UserID,
    });
  };
}
