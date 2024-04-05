import React, {useState, useEffect} from "react";
import { FaCheckCircle, FaEllipsisV, FaMinusCircle, FaPlusCircle, FaRegLightbulb } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { setAssignment, setAssignments, deleteAssignment } from "./assignmentsReducer";
import * as client from "./client";


function Assignments() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        client.getAssignmentsForCourse(courseId ?? "")
        .then((assignments) => {
            console.log('test', assignments);
            dispatch(setAssignments(assignments));
        });
    }, [courseId]);
    
    const assignments = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    // const assignmentList = assignments.filter((assignment) => assignment.course === courseId);    

    const handleDeleteAssignment = (assignmentId: string) => {
        // ask user to confirm
        if (!window.confirm("Are you sure you want to delete this assignment?")) {
            return;
        }
        client.deleteAssignment(assignmentId).then((status) => {
            dispatch(deleteAssignment(assignmentId));
        });
    }
    
    return (
        <div className="row wd-assignments-main col-md-8">
            {/* <AssignmentsTopButtons/> */}
            <div className="row wd-assignments-main mt-100">
                <div className="col">
                    <div className="d-flex flex-column flex-md-row justify-content-md-between">
                        <div className="mb-2 mb-md-0">
                            <input type="text" className="form-control mb-2" placeholder="Search for Assignments" />
                        </div>
                        <div>
                            <button type="button" className="btn btn-secondary me-2 mb-2 mb-md-0">+ Group</button>
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments/Editor`}
                                onClick={() =>
                                    dispatch(setAssignment({
                                        _id: '0',
                                        title: 'New Assignment',
                                        course: courseId,
                                        dueDate: '2024-03-27',
                                        points: 100,
                                        availableFromDate: '2024-03-20',
                                        availableUntilDate: '2024-03-27',
                                    }))
                                }
                            >
                                <button type="button" className="btn btn-danger me-2 mb-2 mb-md-0">+ Assignment</button>
                            </Link>
                            <button type="button" className="btn btn-secondary me-2 mb-2 mb-md-0">︙</button>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-group  wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2 " /> <span className="assignment-title">ASSIGNMENTS</span> <span className="total-percent d-md-inline-block d-none">100% of Total</span>
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group ">
                        {assignments
                            .map((assignment, index) => (
                                <li key={index} className="list-group-item">
                                    <FaEllipsisV className="mr-2" /> <FaRegLightbulb className="me-2" />
                                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} onClick={() => dispatch(setAssignment(assignment))} className="wd-assignment-link">{assignment.title}</Link>
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success" />
                                        <button type="button" className="wd-delete-button" onClick={() => handleDeleteAssignment(assignment._id)}><FaMinusCircle className="ms-2 wd-delete-button"  /> Delete </button>
                                        <FaEllipsisV className="ms-2" />
                                    </span>
                                    <br /><span className="wd-assignment-list-subtext ms-5">Multiple Modules | Due Date: {assignment.dueDate}</span>
                                </li>
                            ))}
                    </ul>

                </li>
            </ul>
        </div>
    );
}
export default Assignments;