import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import CourseEditor from "./Dashboard/CourseEditor";
import Account from "./Account";

import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]); 
  const COURSES_API = `${API_BASE}/api/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, [])

    return (
      <Provider store={store}>
        <div className="d-flex">
          <KanbasNavigation/>
          <div className="main-content" style={{ flexGrow: 1, flexBasis: 0 }}>
              <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="/Account/*" element={<Account />} />
                  <Route path="/Dashboard"element={<Dashboard />}/>
                  <Route path="/Courses/:courseId/*" element={<Courses />} />
                  <Route path="Calendar" element={<h1>Calendar</h1>} />
                  <Route path="CourseEditor" element={<CourseEditor />} />
              </Routes>
          </div>
        </div>
      </Provider>
  );}
  export default Kanbas;