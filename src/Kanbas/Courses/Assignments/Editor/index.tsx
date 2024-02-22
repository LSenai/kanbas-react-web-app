import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";

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
        <div className="col-md-8 mt-4">
            <h2>Assignment Name</h2>
            <input value={assignment?.title} className="form-control mb-2" />
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">Save</button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger float-end">Cancel</Link>
        </div>
    );
}
export default AssignmentEditor;