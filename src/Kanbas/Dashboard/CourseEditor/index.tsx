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
import {Link, useNavigate} from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import {useEffect} from "react";


function CourseEditor() {
    const course = useSelector((state: KanbasState) => state.coursesReducer.course);
    const isEditing = useSelector((state: KanbasState) => state.coursesReducer.isEditingCourse);
    const selectedCourseId = useSelector((state: KanbasState) => state.coursesReducer.selectedCourseId);
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

                <button className="button float-end btn btn-success" onClick={handleSave}>
                    <FaPlus style={{marginBottom: "3px", marginTop: 0}}/>
                    Save
                </button>
           
                <Link to="/Kanbas/Dashboard">
                    <button className="button float-end btn btn-danger mx-2">
                        Cancel
                    </button>
                </Link>
            </div>


        </div>
    )

}

export default CourseEditor;