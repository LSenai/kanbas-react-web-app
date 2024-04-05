import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addAssignment, setAssignment, updateAssignment, resetAssignment, setAssignments, deleteAssignment } from "../assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import "./index.css";
import * as client from "../client";

function AssignmentEditor() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { assignmentId } = useParams();
    const { courseId } = useParams();

    useEffect(() => {
        client.getAssignmentsForCourse(courseId ?? '0')
            .then((assignments) => {
                dispatch(setAssignments(assignments));
            });
    }, [courseId, dispatch]);

    const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);

    const handleAddAssignment = () => {
        client.createAssignment(courseId ?? '', assignment).then((assignment) => {
            dispatch(addAssignment(assignment));
        });
    }

    const handleUpdateAssignment = async () => {
        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    }
    
    const handleSave =  async () => { 
        if (assignmentId !== 'Editor') {
            handleUpdateAssignment();
        } else {
            handleAddAssignment();
            dispatch(resetAssignment());
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    // there's some issue with this function
    // it's not deleting the assignment -- still appears when I navigate back. 

    const handleDeleteAssignment = (assignmentId: string) => {
        // ask user to confirm
        if (!window.confirm("Are you sure you want to delete this assignment?")) {
            return;
        }
        client.deleteAssignment(assignmentId).then((status) => {
            dispatch(deleteAssignment(assignmentId));
            // wait for the delete to complete - - 1 second
            setTimeout(() => {
                navigate(`/Kanbas/Courses/${courseId}/Assignments`);
            }, 1000);
        });
    }
    
    return (
        <div className="row wd-assignment-editor-main">
            <div className="col-md-8 mt-4">
                <div className="wd-editor-fields">
                    <h2>Assignment Editor</h2>
                    <p>{JSON.stringify(assignment, null, 2)}</p>
                    <input 
                        value={assignment?.title} 
                        className="form-control mb-2" 
                        name="title"
                        onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
                    /> 
                    <div className="row mb-3">
                        <label htmlFor="points" className="col-sm-3 col-form-label">Points</label>
                        <div className="col-sm-9">
                            <input 
                                className="form-control" 
                                type="number" 
                                name="points" 
                                id="points" 
                                min="0" 
                                max="100" 
                                value={assignment.points} 
                                onChange={(e) => dispatch(setAssignment({...assignment, points: e.target.value}))}
                            /> 
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                        <div className="col-sm-3">
                            <label>Assign</label> <br />   
                        </div>
                        <div className="col-md-6 wd-assign-to-row">
                            <label>Due</label> <br />
                            <input 
                                type="date" 
                                className="form-control" 
                                name="wd-due-date" 
                                value={assignment?.dueDate} 
                                min="2024-01-01" 
                                max="2025-12-31"
                                onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))}
                            /> <br />
                            <div className="row">
                                <div className="col">
                                    <label>Available From</label> <br />
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        name="wd-available-from" 
                                        value={assignment?.availableFromDate}
                                        min="2024-01-01" 
                                        max="2025-12-31"
                                        onChange={(e) => dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))}
                                    /> <br />
                                </div>
                                <div className="col">
                                    <label>Until</label> <br />
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        name="wd-until" 
                                        value={assignment?.availableUntilDate} 
                                        min="2024-01-01" 
                                        max="2025-12-31"
                                        onChange={(e) => dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))}
                                    /> <br />
                                </div>
                            </div>
                        </div>
                    </div>
                
                {/* <button onClick={() => handleDeleteAssignment(assignment.assignmentId)} className="btn btn-danger mt-2">Delete</button> */}
                <button onClick={handleSave} className="btn btn-success ms-2 mt-2 float-end">Save</button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger float-end mt-2">Cancel</Link>

            </div>   
        </div>
        
    );
}
export default AssignmentEditor;