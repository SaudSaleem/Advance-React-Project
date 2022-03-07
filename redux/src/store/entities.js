import { combineReducers } from "redux";
import bugsReducer from "./bugs/reducer";
import projectsReducer from "./projects/projects";
import usersReducer from "./users/users";
//this function combine multiple reducers

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: usersReducer,
});
