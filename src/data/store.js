import { configureStore } from "@reduxjs/toolkit";

import { tasksReducer } from "./slice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export { store };
