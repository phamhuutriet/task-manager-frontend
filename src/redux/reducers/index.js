import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import fetchReducer from "./fetchReducer";

export default combineReducers({
  task: taskReducer,
  isFetching: fetchReducer,
});
