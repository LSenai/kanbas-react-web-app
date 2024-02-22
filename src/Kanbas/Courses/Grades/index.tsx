import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";

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
        // Add buttons below

        <div>
            <h1>Grades</h1>
            <div className="table-responsive">
                <table className="table table-bordered mt-3">
                    <thead>
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