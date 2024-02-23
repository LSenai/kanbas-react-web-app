import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileExport, FaFileImport, FaGear, FaFilter } from "react-icons/fa6";
import "./index.css";

interface GradeLookup {
    [key: string]: number | undefined;
}

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);

    // Creating a map of grades for faster lookup
    const gradeLookup: GradeLookup = {};
    grades.forEach((grade) => {
        const key = `${grade.student}-${grade.assignment}`;
        gradeLookup[key] = grade.grade;
    });

    return (
        <div className="col-md-10 wd-grades-main">
            <div className="row mb-3">
                <div>
                    <button className="btn btn-secondary float-end mb-2 me-2"><FaFileImport className="me-2" />Import</button>
                    <button className="btn btn-secondary float-end mb-2 me-2"><FaFileExport className="me-2" /> Export</button>
                    <button className="btn btn-secondary float-end mb-2 me-2"><FaGear /></button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label>Student Names</label>
                    <input className="form-control mb-2" placeholder="Search Students"/> 
                </div>
                <div className="col">
                    <label>Assignment Names</label> 
                    <input className="form-control mb-2" placeholder="Search Assignment"/> 
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <button className="btn btn-primary">Apply Filters <FaFilter /></button>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover mt-3">
                    <thead className="thead-dark">
                        <tr>
                            <th>Student Name</th>
                            {as.map((assignment) => (<th key={assignment._id}>{assignment.title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr key={enrollment._id}>
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    {as.map((assignment) => {
                                        const key = `${enrollment.user}-${assignment._id}`;
                                        const grade = gradeLookup[key];
                                        return (<td key={assignment._id}>{grade || ""}</td>);
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Grades;