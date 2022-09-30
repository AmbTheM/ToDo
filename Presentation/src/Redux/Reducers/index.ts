import { combineReducers } from "redux";
import TaskReducer from "./TasksReducer";
import UserIDReducer from "./UserReducer";

const rootReducer = combineReducers({
  TaskReducer,
  UserIDReducer,
});

export default rootReducer;
