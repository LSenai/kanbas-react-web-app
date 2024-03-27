import {Assignment} from "./assignmentsReducer";

export const createAssignment = (assignment: Assignment) => {
    return {
        type: 'ADD_ASSIGNMENT',
        payload: assignment
    };
};
