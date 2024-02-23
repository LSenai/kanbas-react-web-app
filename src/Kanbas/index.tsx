import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return (
      <div className="d-flex">
        <KanbasNavigation/>
        <div className="main-content" style={{ flexGrow: 1, flexBasis: 0 }}>
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/:courseId/*" element={<Courses />} />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
            </Routes>
        </div>
      </div>
  );}
  export default Kanbas;