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
    deleteTask(state, action) {
      const newTasks = state.tasks.filter(
        (task) => action.payload.task_id != task.task_id
      );
      console.log(newTasks);
      state.tasks = [...newTasks];
    },
  },
});

export const getTasks = (appStore) => appStore.tasks;
export const { addTasks, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
