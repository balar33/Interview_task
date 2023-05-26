import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    data: []
  },
  reducers: {
    addData: (state, action) => {
        state.data.push(action.payload)
    },
  }
});

export const { addData } = counterSlice.actions;
export default counterSlice.reducer;
