import { createSlice } from "@reduxjs/toolkit";
import tasks from "./tasks";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks },
  reducers: {
    addTask: (state, action) => {
      state.tasks = [action.payload, ...state.tasks];
    },
    updateTask: (state, action) => {
      const { id, text, description, priority, completed, date } =
        action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id == id);

      if (taskToUpdate) {
        taskToUpdate.text = text;
        taskToUpdate.description = description;
        taskToUpdate.priority = priority;
        taskToUpdate.completed;
        taskToUpdate.date;
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const taskToDelete = state.tasks.find((task) => task.id == id);
      if (taskToDelete) {
        return state.tasks.filter((task) => task.id !== id);
      }
    },
  },
});

const { actions: tasksActions, reducer: tasksReducer } = tasksSlice;
export { tasksActions, tasksReducer };
