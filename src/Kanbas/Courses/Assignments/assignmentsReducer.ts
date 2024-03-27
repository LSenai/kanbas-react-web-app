import { createSlice } from "@reduxjs/toolkit";
import {assignments} from "../../Database";
import exp from "constants";




const initialState = {
  assignments: assignments,
  assignment: {
    title: 'New Assignment',
    description: 'New Assignment Description',
    course: 'Leo101',
    dueDate: '2024-03-27',
    points: 100,
    availableFromDate: '2024-03-20',
    availableUntilDate: '2024-03-27',
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
  },
});

export const {
  addAssignment,
  setAssignment,
  updateAssignment,
  deleteAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
