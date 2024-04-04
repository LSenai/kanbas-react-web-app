import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import CourseEditor from "./Dashboard/CourseEditor";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]); 
  const COURSES_API = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, [])

  const [course, setCourse] = useState({
      _id: "1234", name: "New Course", number: "New Number",
      startDate: "2024-01-10", endDate: "2024-05-15", department: "New Department",
      credits: 3, description: "New Description"
  }); // State for the course being edited

  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course);
    setCourses([response.data, ...courses]);
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
                  <Route path="Dashboard"element={<Dashboard />}/>
                  <Route path="Courses/:courseId/*" element={<Courses />} />
                  <Route path="Calendar" element={<h1>Calendar</h1>} />
                  <Route path="CourseEditor" element={<CourseEditor />} />
              </Routes>
          </div>
        </div>
      </Provider>
  );}
  export default Kanbas;