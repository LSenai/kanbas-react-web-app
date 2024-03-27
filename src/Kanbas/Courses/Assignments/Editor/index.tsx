import React, {useState, useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addAssignment, setAssignment, updateAssignment } from "../assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import "./index.css";

function AssignmentEditor() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { assignmentId } = useParams();
    const { courseId } = useParams();
    const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignments.find((assignment) => assignment._id === assignmentId));
    
/*     const [assignmentData, setAssignmentData] = useState({
        _id: assignment?._id ?? "",
        title: assignment?.title ?? '',
        description: assignment?.description ?? '',
        points: assignment?.points ?? 100,
        dueDate: assignment?.dueDate ?? '2024-01-01',
        availableFromDate: assignment?.availableFromDate ?? '2024-01-01',
        availableUntilDate: assignment?.availableUntilDate ?? '2024-01-01',
        course: assignment?.course ?? 'Leo101',
    }); */

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        points: 100,
        dueDate: "2024-01-01",
        availableFromDate: "2024-01-01",
        availableUntilDate: "2024-01-01",
      });
      
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };
    
    const saveAssignment = () => {
            const newAssignment = { ...formData, course: courseId };
            dispatch(addAssignment(newAssignment));
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        };
    
    const cancel = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
      };

    const save = function () { 
        if (assignmentId) {
            // If assignmentId exists, it means we're updating an existing assignment
            dispatch(updateAssignment(assignment));
        } else {
            // If assignmentId doesn't exist, it means we're adding a new assignment
            const newAssignment = {
                title: 'New Assignment',
                description: 'New Assignment Description',
                points: 100,
                dueDate: '2024-03-27', // Update with default values as needed
                availableFromDate: '2024-03-20', // Update with default values as needed
                availableUntilDate: '2024-03-27', // Update with default values as needed
                course: courseId,
            };
            dispatch(addAssignment(newAssignment));
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    
    

/*     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setAssignmentData({ ...assignmentData, [name]: value });  
      }; */
      
    return (
        <div className="row wd-assignment-editor-main">
            <div className="col-md-8 mt-4">
                <div className="wd-editor-fields">
                    <h2>Assignment Name</h2>
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

                <button onClick={save} className="btn btn-success ms-2 mt-2 float-end">Save</button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger float-end mt-2">Cancel</Link>

            </div>   
        </div>
        
    );
}
export default AssignmentEditor;