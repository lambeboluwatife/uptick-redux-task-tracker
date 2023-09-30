import { createSlice } from "@reduxjs/toolkit";
// import tasks from "./tasks";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {
    getTasks: (state, action) => {
      return {
        ...state,
        tasks: action.payload,
      };
    },
    addTask: (state, action) => {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    },
    updateTask: (state, action) => {
      const { id, text, description, priority } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id == id);
      if (taskToUpdate) {
        taskToUpdate.text = text;
        taskToUpdate.description = description;
        taskToUpdate.priority = priority;
        taskToUpdate.completed;
        taskToUpdate.date;
      }
    },
    toggleStatus: (state, action) => {
      const taskToToggle = state.tasks.find(
        (task) => task.id == action.payload
      );

      if (taskToToggle) {
        taskToToggle.completed = !taskToToggle.completed;
      }
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    },
  },
});

const { actions: tasksActions, reducer: tasksReducer } = tasksSlice;
export { tasksActions, tasksReducer };
