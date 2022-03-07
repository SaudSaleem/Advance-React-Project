import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./store/store";
import * as actions from "./store/bugs/actionTypes";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs/actions";
import { getUnresolvedBugs, getUserBug } from "./store/bugs/gettters";
import { projectAdded } from "./store/projects/projects";
import { userAdded } from "./store/users/users";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
  console.log(getUnresolvedBugs(store.getState()));
  //console.log(getUserBug(1)(store.getState()))
});

//store.dispatch(bugAdded("Bug 1"));
//bugs
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 1 }));
store.dispatch((dispatch, getState) => {
  //call API
  //When promise resolved => dispatch()
  dispatch({
    type: "bugsRecieved",
    bugs: [1, 2, 3],
  });
});
//projects
store.dispatch(projectAdded({ name: "NASA" }));
//users
store.dispatch(userAdded({ name: "Saud Saleem" }));
store.dispatch(userAdded({ name: "Awais Saleem" }));
//API CALL MIDDLEARW
store.dispatch({
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    method: "get",
    // data: {},
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  },
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
