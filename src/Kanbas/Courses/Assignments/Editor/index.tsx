import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import "./index.css";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId
    );
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("We'll figure this out later");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="row wd-assignment-editor-main">
            <div className="col-md-8 mt-4">
                <div className="wd-editor-fields">
                    <h2>Assignment Name</h2>
                    <input value={assignment?.title} className="form-control mb-2" />
                    <textarea className="form-control" placeholder="Enter the assignment description here" id="assignment-name"/>
                    <div className="row mb-3">
                        <label htmlFor="points" className="col-sm-3 col-form-label">Points</label>
                        <div className="col-sm-9">
                            <input className="form-control" type="number" name="points" id="points" min="0" max="100" value="100"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="assignment-group" className="col-sm-3 col-form-label">Assignment Group</label>
                        <div className="col-sm-9">
                            <select className="form-select" name="assignment-group" id="assignment-group">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="display-grade-as" className="col-sm-3 col-form-label">Display Grade as</label>
                        <div className="col-sm-9">
                            <select className="form-select" name="display-grade-as" id="display-grade-as">
                                <option value="Percentage">Percentage</option>
                                <option value="Points">Points</option>
                                <option value="Complete/Incomplete">Complete/Incomplete</option>
                                <option value="Letter Grade">Letter Grade</option>
                                <option value="GPA Scale">GPA Scale</option>
                                <option value="Not Graded">Not Graded</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-3"></div> 
                        <div className="col-sm-9">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="count-to-finalgrade" id="count-to-finalgrade"/>
                                <label className="form-check-label" htmlFor="count-to-finalgrade">Do not count assignment towards the final grade</label><br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                        <div className="col-sm-3">
                            <label>Assign</label> <br />   
                        </div>
                        <div className="col-md-6 wd-assign-to-row">
                            Assign to
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="wd-assign-to" id="wd-assign-to-everyone" value="Everyone" checked={true}/>
                                <label className="form-check-label" htmlFor="wd-assign-to-everyone">Everyone</label>
                            </div>
                            <label>Due</label> <br />
                            <input type="date" className="form-control" name="wd-due-date" value="2024-01-01" min="2024-01-01" max="2025-12-31"/> <br />
                            <div className="row">
                                <div className="col">
                                    <label>Available From</label> <br />
                                    <input type="date" className="form-control" name="wd-available-from" value="2024-01-01" min="2024-01-01" max="2025-12-31"/> <br />
                                </div>
                                <div className="col">
                                    <label>Until</label> <br />
                                    <input type="date" className="form-control" name="wd-until" value="2024-01-01" min="2024-01-01" max="2025-12-31"/> <br />
                                </div>
                            </div>
                            <button className="btn btn-secondary mt-2" style={{ width: "100%" }}>+ Add</button>
                        </div>
                    </div>
                

                <button onClick={handleSave} className="btn btn-success ms-2 mt-2 float-end">Save</button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger float-end mt-2">Cancel</Link>

            </div>   
        </div>
        
    );
}
export default AssignmentEditor;