import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import coursesReducer from "../Courses/coursesReducer";
import userReducer from "../../Users/userReducer";

export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  assignmentsReducer: {
    assignments: any[];
    assignment: any;
    selectedAssignmentId: any;
  };
  coursesReducer: {
    courses: any[];
    course: any;
    selectedCourseId: any;
    isEditingCourse: boolean;
  };
  userReducer: {
    user: any;
  }
}

const store = configureStore({
  reducer: {
    modulesReducer, 
    assignmentsReducer, 
    coursesReducer,
    userReducer
  },
});

export default store;