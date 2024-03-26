import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRegLightbulb } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
import AssignmentsTopButtons from "./AssignmentsTopButtons";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";


function Assignments() {
    const { courseId } = useParams();
    const assignmentList = useSelector(
        (state: KanbasState) => state.assignmentsReducer.assignments
      );
    
      const dispatch = useDispatch();
      const assignment = useSelector(
        (state: KanbasState) => state.assignmentsReducer.assignments
      );

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
                            <button type="button" className="btn btn-danger me-2 mb-2 mb-md-0">+ Assignment</button>
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