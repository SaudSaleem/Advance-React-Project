import { createAction } from "@reduxjs/toolkit";
import * as actions from "./actionTypes";
//code refactoring using redux/toolkit
export const bugAdded = createAction(actions.BUG_ADDED);
export const bugResolved = createAction(actions.BUG_RESOLVED);
export const bugRemoved = createAction(actions.BUG_REMOVED);

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// }

// export function bugResolved(id) {
//   return {
//     type: actions.BUG_RESOLVED,
//     payload: {
//       id,
//     },
//   };
// }

// export function bugRemoved(id) {
//   return {
//     type: actions.BUG_REMOVED,
//     payload: {
//       id,
//     },
//   };
// }
