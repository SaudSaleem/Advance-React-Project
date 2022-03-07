//import { createStore,applyMiddleware } from "redux";
import reducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/func";
import api from "./middleware/api";
//import project from "./projects/projects";
//REDUX TOOLKIT (IT SIMPLYFY REDUX CODE)
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger("consolee"), func, api],
});
// const store = createStore(
//   reducer,
//applyMiddleware(logger)
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
export default store;
