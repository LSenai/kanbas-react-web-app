import { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { courses } from "../../Kanbas/Database";
import {useParams, useLocation } from "react-router-dom";
import CourseNavigation from './Navigation';
import './index.css';

function CourseHeader() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    let currentSubPage = pathname.split("/").pop();
    currentSubPage = currentSubPage?.replace(/%20/g, " ");

    const [menuVisible, setMenuVisible] = useState(true);
    const toggleMenu = () => setMenuVisible(!menuVisible);

    return (
        <div>
            {/* Rendering course info and button */}
            {course && (
                <h1 className="d-none d-md-block">
                    <span><HiMenu onClick={toggleMenu} className='wd-course-menu-icon'/></span> {course.number} {course.name} &gt; {currentSubPage}
                </h1>
            )}
            {/* Button to toggle the course navigation menu */}
            <button className="btn btn-link d-none d-md-none className='wd-course-menu-icon" onClick={toggleMenu}>
                            <HiMenu />
            </button>

            {/* Course navigation menu */}
            {menuVisible && <CourseNavigation />}
        </div>
    );
}
export default CourseHeader;