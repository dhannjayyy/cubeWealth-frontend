import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTasks(state, action) {
      state.tasks = [...action.payload.tasks];
    },
  },
});

export const getTasks = (appStore) => appStore.tasks;
export const { addTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
