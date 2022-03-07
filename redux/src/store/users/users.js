import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    //actions => actions handlers
    userAdded: (state, action) => {
      state.push({
        id: state.length + 1,
        name: action.payload.name,
      });
    },
  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;
