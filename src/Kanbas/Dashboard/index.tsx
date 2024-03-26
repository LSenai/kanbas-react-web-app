import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";  
import { Link } from 'react-router-dom';
import * as db from '../Database';

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string
};

function Dashboard( {courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}: {
  courses: Course[], 
  course: Course, 
  setCourse: (course: Course) => void, 
  addNewCourse: () => void, 
  deleteCourse: (courseId: string) => void, 
  updateCourse: () => void;
}) {
  const [newCourseTitle, setNewCourseTitle] = useState(''); 

  // Handles initiation of editing
  const handleEdit = (courseId: string) => { 
    const courseToEdit = courses.find((c) => c._id === courseId); 
    if (courseToEdit) {
        setCourse(courseToEdit); // Update state in Kanbas
    }
    };
  
  // Handle new course form submission
  const handleNewCourseSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newCourseTitle) {
      // We assume addNewCourse creates a course with title from newCourseTitle
        addNewCourse(); 
        setNewCourseTitle(''); 
      }
  };

  // Handle change in new course title input
  const handleNewCourseChange = (event: ChangeEvent<HTMLInputElement>) => {
      setNewCourseTitle(event.target.value);
  };

  // Handle update course form submission
  const handleUpdateCourse = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      updateCourse(); 
      setCourse({ 
          _id: "", 
          name: "", 
          number: "", 
          startDate: "", 
          endDate: "", 
          image: "get$.jpg" 
      }); // Reset the course state to default values
    };
    
    return (
        <div className="p-4">
          <h1>Dashboard</h1>              
          <hr />
          <h2>Published Courses ({courses.length})</h2> 
          <hr />

          {course._id ? ( // Check if a course is selected for editing
          // Edit Course Form
          <form onSubmit={handleUpdateCourse}> 
              <div className="form-group">
                  <label htmlFor="newCourseTitle">Course Title:</label>
                  <input
                      type="text"
                      className="form-control mt-2 mb-2"
                      style={{ maxWidth: "300px" }}
                      id="newCourseTitle"
                      value={course.name}
                      onChange={(e) => 
                          setCourse({ ...course, name: e.target.value })
                      }
                  />
              </div>
            {/* Add similar input fields for other course properties */}
              <button type="submit" className="btn btn-primary">
                  Update Course
              </button>
          </form>
      ) : (
          <form onSubmit={handleNewCourseSubmit}>
            <div className="form-group">
              <label htmlFor="newCourseTitle">New Course Title:</label>
              <input
                type="text"
                className="form-control mt-2 mb-2"
                style={{ maxWidth: "300px" }}
                id="newCourseTitle"
                value={newCourseTitle}
                onChange={handleNewCourseChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Course
            </button>
          </form>
      )}
          <div className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {courses.map((course: Course) => (
                <div key={course._id} className="col" style={{ width: 300 }}>
                  <div className="card">
                    <img src={`../../../images/${course.image}`} className="card-img-top"
                         style={{ height: 150 }}/>
                         
                    <div className="card-body">
                      <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                        {course.name} </Link>
                      <p className="card-text">{course.name}</p>
                      <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                        Go </Link>
                      <button onClick={() => deleteCourse(course._id)} className="btn btn-danger mx-2">Delete</button> 
                      <button onClick={() => handleEdit(course._id)} className="btn btn-warning">Edit</button>
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