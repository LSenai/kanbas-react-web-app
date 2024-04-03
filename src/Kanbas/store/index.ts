import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import coursesReducer from "../Courses/coursesReducer";
export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  assignmentsReducer: {
    assignments: any[];
    selectedAssignmentId: any;
  };
  coursesReducer: {
    courses: any[];
    course: any;
    selectedCourseId: any;
    isEditingCourse: boolean;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer, 
    assignmentsReducer, 
    coursesReducer,
  },
});

export default store;