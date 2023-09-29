import { createSlice } from "@reduxjs/toolkit";
import tasks from "./tasks";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks },
  reducers: {
    addTask: (state, action) => {
      state.tasks = [action.payload, ...state.tasks];
    },
  },
});

const { actions: tasksActions, reducer: tasksReducer } = tasksSlice;
export { tasksActions, tasksReducer };
