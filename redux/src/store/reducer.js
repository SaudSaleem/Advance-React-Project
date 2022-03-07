import { combineReducers } from "redux";
import entitiesReducer from "./entities";

//this function combine multiple reducers

export default combineReducers({
  entities: entitiesReducer,
});
