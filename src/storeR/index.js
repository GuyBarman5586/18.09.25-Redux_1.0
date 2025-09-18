import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todoslice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;