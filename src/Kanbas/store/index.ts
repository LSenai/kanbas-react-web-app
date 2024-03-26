import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";

export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  assignmentsReducer: {
    assignments: any;
    selectedAssignmentId: string | null;
  };
}
const store = configureStore({
  reducer: {
    modules: modulesReducer, 
    assignments: assignmentsReducer, 
  },
});

export default store;