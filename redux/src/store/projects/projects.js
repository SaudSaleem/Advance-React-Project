import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    //actions => actions handlers
    projectAdded: (state, action) => {
      console.log("projectAdded");
      state.push({
        id: state.length + 1,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = slice.actions;
export default slice.reducer;
