import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addAssignment, setAssignment, updateAssignment, resetAssignment, setAssignments } from "../assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import "./index.css";
import * as client from "../client";

function AssignmentEditor() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { assignmentId } = useParams();
    const { courseId } = useParams();
    const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
    console.log(assignment);

    // useEffect(() => {
    //     client.getAssignmentsForCourse(courseId ?? "")
    //     .then((assignments) => {
    //         dispatch(setAssignments(assignments));
    //     });
    // }, [courseId]);

    const [selectedAssignment, setSelectedAssignment] = useState<any>({
        _id: '0',
        title: 'New Assignment',
        description: 'New Assignment Description',
        course: courseId ?? '',
        dueDate: '2024-03-27',
        points: 100,
        availableFromDate: '2024-03-20',
        availableUntilDate: '2024-03-27',
    });

    const handleAddAssignment = () => {
        client.createAssignment(courseId ?? '', assignment).then((assignment) => {
            dispatch(addAssignment(assignment));
        });
    }
    
    const handleSave =  async () => { 
        if (assignmentId !== '0') {
            // If assignmentId exists, it means we're updating an existing assignment
            await dispatch(updateAssignment(assignment));
            // dispatch(resetAssignment());
        } else {
            // If assignmentId doesn't exist, it means we're adding a new assignment
            const newAssignment = {...assignment, course: courseId}
            dispatch(setAssignment({ newAssignment}));
            // console.log(assignment)
            handleAddAssignment();
            // dispatch(resetAssignment());
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    
      
    return (
        <div className="row wd-assignment-editor-main">
            <div className="col-md-8 mt-4">
                <div className="wd-editor-fields">
                    <h2>Assignment Editor</h2>
                    <input 
                        value={assignment?.title} 
                        className="form-control mb-2" 
                        name="title"
                        onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
                    /> 
                    <textarea 
                        className="form-control" 
                        placeholder="Enter the assignment description here" 
                        id="assignment-description"
                        name="description"
                        onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}
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
                                value="100" 
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
                                value="2024-01-01" 
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
                                        value="2024-01-01" 
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
                                        value="2024-01-01" 
                                        min="2024-01-01" 
                                        max="2025-12-31"
                                        onChange={(e) => dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))}
                                    /> <br />
                                </div>
                            </div>
                        </div>
                    </div>

                <button onClick={handleSave} className="btn btn-success ms-2 mt-2 float-end">Save</button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger float-end mt-2">Cancel</Link>

            </div>   
        </div>
        
    );
}
export default AssignmentEditor;