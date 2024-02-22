import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRegLightbulb } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
import AssignmentsTopButtons from "./AssignmentsTopButtons";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter((assignment) => assignment.course === courseId);

    return (
        <div className="row wd-assignments-main col-md-8">
            <AssignmentsTopButtons/>
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
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="mr-2" /> <FaRegLightbulb className="me-2"/>
                                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="wd-assignment-link">{assignment.title}</Link>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
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