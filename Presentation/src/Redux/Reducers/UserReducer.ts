import { USERID, UserID } from "../ActionTypes/ActionTypes";

export default function UserIDReducer(state: string = "", action: UserID) {
  switch (action.type) {
    case USERID:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
