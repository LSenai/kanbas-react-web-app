import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";
export type TodoType = {
    id: string;
    title: string;
}

// TypeScript interface outlining the expected structure of your application state.
// This will be used to provide type information to the useSelector hook in the components.
// Allows us to hover over the state object in the useSelector hook and see the expected structure of the state.
export interface LabState {
    helloReducer: {
        message: string;
    };
    counterReducer: {
        count: number;
    };
    addReducer: {
        sum: number;
    };
    todosReducer: {
        todos: TodoType[];
        todo: TodoType;
    };
}
// Create the Redux store
const store = configureStore({
    reducer: {
        helloReducer, // Add the 'helloReducer' to manage the 'helloReducer' slice of state
        counterReducer, // Add the 'counterReducer' to manage the 'counterReducer' slice of state  
        addReducer, // Add the 'addReducer' to manage the 'addReducer' slice of state
        todosReducer, // Add the 'todosReducer' to manage the 'todosReducer' slice of state
    },
  });
export default store;