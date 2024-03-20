import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    message: "Hello World", // Initial value of the 'message' state property 
};

const helloSlice = createSlice({
    name: "hello",          // Unique name to identify this slice of the Redux store
    initialState,           // Sets the initial state for this slice
    reducers: {},           // Will contain functions (reducers) to modify the state 
});

export default helloSlice.reducer;  // Export the reducer function to use when setting up the store
