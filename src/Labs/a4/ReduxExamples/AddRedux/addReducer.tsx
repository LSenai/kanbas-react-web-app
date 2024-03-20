import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sum: 0, // Initialize the 'sum' property of the state to 0
};

const addSlice = createSlice({
  name: "add", // Unique name to identify this part of your state
  initialState, 
  reducers: {
    add: (state, action) => {
      // The 'add' reducer function will receive the current state and an action object
      state.sum = action.payload.a + action.payload.b; 
      // Access the 'a' and 'b' values from the action's payload to perform the addition
      // Update the 'sum' property directly within the current state with the new value
    },
  },
});

export const { add } = addSlice.actions; // Export the 'add' action for dispatching
export default addSlice.reducer; // Export the reducer function for your store
