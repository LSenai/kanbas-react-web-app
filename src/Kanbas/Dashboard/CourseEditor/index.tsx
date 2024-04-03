import {
    addCourse,
    deleteCourse,
    updateCourse,
    setCourse,
    setCourses,
    setSelectedCourseId,
    clearSelectedCourseId
} from "../../Courses/coursesReducer";
import * as utils from "./courseUtilities";
import {useSelector, useDispatch} from "react-redux";
import {KanbasState} from "../../store";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import {useEffect} from "react";
// import { IoTrashOutline } from "react-icons/io5";
// import { FaEdit } from "react-icons/fa";


function CourseEditor() {
    const course = useSelector((state: KanbasState) => state.coursesReducer.course);
    const isEditing = useSelector((state: KanbasState) => state.coursesReducer.isEditingCourse);
    const selectedCourseId = useSelector((state: KanbasState) => state.coursesReducer.selectedCourseId);
    // const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        utils.findAllCourses().then((courses) => {
            dispatch(setCourses(courses));
        })
    }, [dispatch]);

    useEffect(() => {
        if (selectedCourseId) {
            const courseToEdit = utils.findCourseById(selectedCourseId).then((course) => {
                dispatch(setCourse(course));
            })
        } else {
            dispatch(setCourse({
                _id: new Date().getTime().toString(),
                name: "New Course",
                number: "New Number",
                startDate: "2024-01-10",
                endDate: "2024-05-15",
                department: "New Department",
                credits: 3,
                description: "New Description"
              }));
        }
    }, [selectedCourseId, dispatch]);
    
    const handleAddCourse = () => {
        utils.addNewCourse(course).then((course) => {
            dispatch(addCourse(course));
/*             dispatch(setCourse({
                _id: new Date().getTime().toString(),
                name: "New Course",
                number: "New Number",
                startDate: "2024-01-10",
                endDate: "2024-05-15",
                department: "New Department",
                credits: 3,
                description: "New Description"
              })); */
            });
    };

    const handleUpdateCourse = async () => {
        const status = await utils.updateCourse(course);
        dispatch(updateCourse(course));
    }

    const handleSave = () => {
        if (isEditing) {
            handleUpdateCourse();
        } else {
            handleAddCourse();
        }
        dispatch(clearSelectedCourseId());
        navigate("/Kanbas/Dashboard")
    }

    // const handleDeleteCourse = (courseId: string) => {
    //     utils.deleteCourse(courseId).then((status) => {
    //         dispatch(deleteCourse(courseId))
    //         console.log(courseId)
    //     })
    // }

    // const courseList = useSelector((state: KanbasState) => state.coursesReducer.courses);

    return (
        <div className="p-4" >
            <h1>Course Editor</h1>
            <hr />

            <div className="flex flex-row w-50">
                <div className="mb-2">
                    <label className="form-label">Course Name</label>
                    <input className="form-control" type="text" value={course.name} onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value }))}/>
                </div>
                <div className="mb-2">
                    <label className="form-label">Course Description</label>
                    <input className="form-control" type="text" value={course.description} onChange={(e) => dispatch(setCourse({ ...course, description: e.target.value }))}/>
                </div>
                <div className="mb-2">
                    <label className="form-label">Start Date</label>
                    <input className="form-control" type="date" value={course.startDate} onChange={(e) => dispatch(setCourse({ ...course, startDate: e.target.value }))}/>
                </div>
                <div className="mb-2">
                    <label className="form-label">End Date</label>
                    <input className="form-control" type="date" value={course.endDate} onChange={(e) => dispatch(setCourse({ ...course, endDate: e.target.value }))}/>
                </div>
                <div className="mb-2">
                    <label className="form-label">Department</label>
                    <input className="form-control" type="text" value={course.department} onChange={(e) => dispatch(setCourse({ ...course, department: e.target.value }))}/>
                </div>
                <div className="mb-2">
                    <label className="form-label">Credits</label>
                    <input className="form-control" type="number" value={course.credits} onChange={(e) => dispatch(setCourse({ ...course, credits: parseInt(e.target.value) }))}/>
                </div>

                <Link to={'/Kanbas/Dashboard'}>
                    <button className="button float-end btn btn-success" onClick={handleSave}>
                        <FaPlus style={{marginBottom: "3px", marginTop: 0}}/>
                        Save
                    </button>
                </Link>

{/*                 <button className="button" onClick={handleUpdateCourse}>
                    <RxUpdate style={{marginBottom: "3px", marginTop: 0}}/>
                    Update
                </button> */}
            </div>
            
{/*             <hr/>
            <h1>Published Courses ({courseList.length})</h1>
            <ul className="list-group">
                {courseList.map((course, index) => (
                    <li key={index} className="list-group-item">
                        <button className="button float-end" style={{backgroundColor: "#c33232", color: "white"}}  onClick={() => handleDeleteCourse(course._id)}>
                            <IoTrashOutline style={{marginBottom: "3px", marginTop: 0}}/>
                            Delete
                        </button>

                        <Link to={`/Kanbas/Courses/${course._id}/Home`} style={{fontSize: "1.5em"}}>
                            {course.name}
                        </Link>

                        <button className="button" onClick={() => dispatch(setCourse(course))} style={{marginTop: 0}}>
                            <FaEdit style={{marginBottom: "3px", marginTop: 0}}/>
                            Edit
                        </button>

                        <p><b>id: </b> {course._id}</p>
                        <p><b>Description: </b> {course.description}</p>
                        <p><b>Start date: </b> {course.startDate}</p>
                        <p><b>End date: </b>{course.endDate}</p>
                    </li>
                ))}
            </ul> */}

        </div>
    )

}

export default CourseEditor;