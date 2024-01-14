import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    email: "",
    accessToken: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const getUser = (appStore) => appStore.user;
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
