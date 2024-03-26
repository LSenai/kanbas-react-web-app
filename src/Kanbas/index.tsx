import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import * as db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses); // Start with an empty array
  const [course, setCourse] = useState({
      _id: "1234", name: "New Course", number: "New Number",
      startDate: "2024-01-10", endDate: "2024-05-15", image: "get$.jpg" 
  }); // State for the course being edited

  const addNewCourse = () => {
    setCourses([...courses,
    {...course, _id: new Date().getTime().toString()}]);
  }

  const deleteCourse = (courseId: string) => {
    const updatedCourses = courses.filter((course) => course._id !== courseId);
    setCourses(updatedCourses);
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


    return (
      <Provider store={store}>
        <div className="d-flex">
          <KanbasNavigation/>
          <div className="main-content" style={{ flexGrow: 1, flexBasis: 0 }}>
              <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard"element={
                      <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                      />
                    }
              />
                  <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
                  <Route path="Calendar" element={<h1>Calendar</h1>} />
              </Routes>
          </div>
        </div>
      </Provider>
  );}
  export default Kanbas;