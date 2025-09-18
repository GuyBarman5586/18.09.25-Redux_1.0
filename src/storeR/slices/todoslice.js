import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deletetodo: (state, action) => {
      const idToDelete = action.payload;
      state.todos = state.todos.filter((t) => t.id !== idToDelete);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateIsCompleted: (state, action) => {
      const { id, isCompleted } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.isCompleted = Boolean(isCompleted);
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, deletetodo, updateIsCompleted } = todoSlice.actions;

export default todoSlice.reducer;


