import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import * as actions from "./actionTypes";
//this method create

// createSlice({
//   name: "bugs",
//   initialState: [],
//   reducers: {
//     //actions => actions handlers
//     [actions.BUG_ADDED]: (state, action) => {
//       state.push({
//         id: state.length + 1,
//         description: action.payload.description,
//         resolved: false,
//       });
//     },
//   },
// });

export default createReducer([], {
  [actions.BUG_ADDED]: (state, action) => {
    //under the hood redux/toolkit use 'immer' library which create immutable obj of state (as required)
    state.push({
      id: state.length + 1,
      description: action.payload.description,
      resolved: false,
    });
  },
  bugResolved: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resolved = true;
  },
  [actions.BUG_REMOVED]: (state, action) => {
    state = state.filter((bug) => bug.id !== action.payload.id);
    console.log("hello", state, action.payload.id);
  },
});

// export default function reducer(state = [], action) {
//   if (action.type === actions.BUG_ADDED) {
//     return [
//       ...state,
//       {
//         id: state.length + 1,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   } else if (action.type === actions.BUG_REMOVED) {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   } else if (action.type === actions.BUG_RESOLVED) {
//     return state.filter((bug) =>
//       bug.id !== action.payload.id
//         ? bug
//         : {
//             ...bug,
//             resolved: true,
//           }
//     );
//   }
//   return state;
// }

//design store, in my case we have array of objects
//desgn possible actions, like bugAdded, bugRemoved, bugUpdated,
//design reducer (reducer take state, make its copy and return updated state)
//action should contain minimum info

//Seqeunce
//action communicate with store, then store communicate with reducer, and reducer return updated state

//CAUTION
//DO NOT UPDATE/MUTATE STATE OBJECT, ALWAYS CREATE COPY FIRST
