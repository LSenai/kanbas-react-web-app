import {createSlice} from '@reduxjs/toolkit';

import {useState, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    courses: [] as any[],
    course: {
        _id: new Date().getTime().toString(), 
        name: "New Course", 
        number: "New Number",
        startDate: "2024-01-10", 
        endDate: "2024-05-15", 
        department: "New Department",
        credits: 3, 
        description: "New Description"
    },
    selectedCourseId: null,
    isEditingCourse: false   
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, action) => {
            state.courses = [
                {...action.payload, _id: new Date().getTime().toString()},
                ...state.courses,
            ];
        },
        deleteCourse: (state, action) => {
            state.courses = state.courses.filter(
                (course: {_id: string;}) => course._id !== action.payload
            );
        },
        updateCourse: (state, action) => {
            state.courses = state.courses.map((course: { _id: string; }) => {
                if (course._id === action.payload._id) {
                    return action.payload;
                } else {
                    return course;
                }
            });
        },

        setCourse: (state, action) => {
            state.course = action.payload;
        },

        setCourses: (state, action) => {
            state.courses = action.payload;
        },

        setSelectedCourseId: (state, action) => {
            state.selectedCourseId = action.payload;
            state.isEditingCourse = true;
        },

        clearSelectedCourseId: (state) => {
            state.selectedCourseId = null;
            state.isEditingCourse = false;
        }
    },  
});

export const {addCourse, deleteCourse, updateCourse, setCourse, setCourses, setSelectedCourseId, clearSelectedCourseId} = coursesSlice.actions;
export default coursesSlice.reducer;