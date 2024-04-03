import { find } from "@reduxjs/toolkit/dist/utils";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";  
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { KanbasState } from "../store";
import {
  addCourse,
  deleteCourse,
  updateCourse,
  setCourse,
  setCourses
} from "../Courses/coursesReducer";
import * as utils from "./CourseEditor/courseUtilities";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
};

function Dashboard() {

  const courses = useSelector((state: KanbasState) => state.coursesReducer.courses);
  const dispatch = useDispatch();
  // const [course, setCourse] = useState({
  //   _id: "1234", name: "New Course", number: "New Number",
  //   startDate: "2024-01-10", endDate: "2024-05-15", department: "New Department",
  //   credits: 3, description: "New Description"
  // }); // State for the course being edited

  const course = useSelector((state: KanbasState) => state.coursesReducer.course);

  // variable to trigger re-renders
  const [renderTrigger, setRenderTrigger] = useState(0);

  useEffect(() => {
    utils.findAllCourses().then((courses) => {
        dispatch(setCourses(courses));
    })
  }, [dispatch]);

  const handleAddCourse = () => {
    utils.addNewCourse(course).then((newCourse) => {
      // Dispatch the addCourse action to update Redux store
      dispatch(addCourse(newCourse));
      console.log(courses)
      
      // Reset the course state to initial values for next entry
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
    })
    .catch((error) => console.log(error));
  }

  const handleDeleteCourse = (courseId: string) => {
    // first ask user if they're sure they want to delete the course
    if (!window.confirm("Are you sure you want to delete this course?")) {
      return;
    }
    utils.deleteCourse(courseId).then((status) => {
        dispatch(deleteCourse(courseId))
        // console.log(courseId)
    })
  }

  const [ isEditingCourse, setIsEditingCourse ] = useState(false);
  const [ courseToEdit, setCourseToEdit ] = useState<string>('');
  const navigate = useNavigate();

  const handleEditCourse = (courseId: string) => {
    setIsEditingCourse(true);
    setCourseToEdit(courseId);
    dispatch(setCourse(courses.find((course: any) => course._id === courseId)));
    navigate('/Kanbas/CourseEditor'); 
  }


    return (
        <div className="p-4">
          <h1>Dashboard</h1>              
          <hr />
          <h2>Published Courses ({courses.length})</h2> 
          <hr />
          <div className="w-25">
            <input type="text" className="form-control mb-1" placeholder="Course Name" value={course.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setCourse({...course, name: e.target.value}))} /> 
            <input type="text" className="form-control mb-1" placeholder="Course Number" value={course.number}
              onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setCourse({...course, number: e.target.value}))} /> 
            <input type="text" className="form-control mb-1" placeholder="Department" value={course.department}
              onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setCourse({...course, department: e.target.value}))} /> 
            <input type="number" className="form-control mb-1" placeholder="Credits" value={course.credits}
              onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setCourse({...course, credits: parseInt(e.target.value)}))} /> 
            <input type="text" className="form-control mb-1" placeholder="Description" value={course.description}
              onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setCourse({...course, description: e.target.value}))} /> 
            <input type="date" className="form-control mb-1" placeholder="Start Date" value={course.startDate}
              onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setCourse({...course, startDate: e.target.value}))} /> 
            <input
              type="date"
              className="form-control mb-1"
              placeholder="End Date"
              value={course.endDate}
              onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setCourse({ ...course, endDate: e.target.value }))} />
            
            <button onClick={handleAddCourse} className="btn btn-primary">Add Course</button>
            <Link to={'/Kanbas/CourseEditor' }><button> Add a New Course </button></Link>
          </div>

          
          <div className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {courses.map((course: any) => (
                <div key={course._id} className="col" style={{ width: 300 }}>
                  <div className="card">
                    <img src={`../../../images/get$.jpg`} className="card-img-top"
                         style={{ height: 150 }}/>
                         
                    <div className="card-body">
                      <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                        {course.name} </Link>
                      {/* <p className="card-text">{course.startDate}</p>
                      <p className="card-text">{course.endDate}</p> */}
                      <p></p>

                      <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary" style={{paddingTop: '3px', paddingBottom: '4px'}}>
                        Go 
                      </Link>
                      {/* <Link to={'/Kanbas/CourseEditor'}> */}
                      <button className="btn btn-warning mx-2" style={{paddingTop: '3px', paddingBottom: '4px'}}
                        onClick={() => handleEditCourse}>
                        Edit </button>
                      {/* </Link> */}
                      <button onClick={() => handleDeleteCourse(course._id)} className="btn btn-danger" style={{paddingTop: '3px', paddingBottom: '4px'}}>
                        Delete</button> 
                      {/* <button onClick={() => handleEdit(course._id)} className="btn btn-warning">Edit</button> */}
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
      
}
export default Dashboard;