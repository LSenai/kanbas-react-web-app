import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [] as any[],
  assignment: {
    _id: '0',
    title: 'New Assignment',
    description: 'New Assignment Description',
    course: '',
    dueDate: '2024-03-27',
    points: 100,
    availableFromDate: '2024-03-20',
    availableUntilDate: '2024-03-27',
  },
};

const assignmentsSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [action.payload, ...state.assignments];
    },
    // plural assignments
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },  
    // singular assignments
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      if (action.payload) {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
      }
    },      
    // should probably have this for all reducers
    resetAssignment: (state) => {
      state.assignment = initialState.assignment;
    },
  },
});

export const {
  addAssignment,
  setAssignment,
  updateAssignment,
  deleteAssignment,
  setAssignments,
  resetAssignment
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
