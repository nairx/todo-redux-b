import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        name: action.payload.name,
        email: action.payload.email,
        pass: action.payload.pass,
      };
      state.push(newUser);
    },
    validateUser: (state, action) => {
      const found = state.find(
        (value) =>
          value.email === action.payload.email &&
          value.pass === action.payload.pass
      );
      return found;
    },
  },
});
export const { addUser, validateUser } = userSlice.actions;
export default userSlice.reducer;
