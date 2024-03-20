import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" }, // Placeholder for the todo being edited
};

const todosSlice = createSlice({
  name: "todos", 
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // 1. Create the new todo with a unique ID
      const newTodo = { 
        ...action.payload,  
        id: new Date().getTime().toString()
      };

      // 2. Add to the existing list
      state.todos = [...state.todos, newTodo]; 

      // 3. Reset the 'todo' state for a fresh input field
      state.todo = { title: "" }; 
    },

    deleteTodo: (state, action) => {
      // Filter out the todo with the matching 'action.payload' ID
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      // Replace the old todo with the updated one from 'action.payload'
      state.todos = state.todos.map((item) => 
        item.id === action.payload.id ? action.payload : item
      );

      // Reset 'todo' to clear the input field
      state.todo = { title: "" }; 
    },

    setTodo: (state, action) => {
      // Update the 'todo' state with the todo to be edited (`action.payload`)
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;