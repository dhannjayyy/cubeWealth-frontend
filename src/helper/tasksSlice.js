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
    updateTask(state, action) {
      state.tasks.map((task, index) => {
        if (task.task_id == action.payload.task_id) {
          state.tasks[index].title = action.payload.title;
          state.tasks[index].description = action.payload.description;
        }
      });
    },
  },
});

export const getTasks = (appStore) => appStore.tasks;
export const { addTasks, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
