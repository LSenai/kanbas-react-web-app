import axios from 'axios';
import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import {useParams, useLocation } from "react-router-dom";
import CourseNavigation from './Navigation';
import './index.css';

function CourseHeader() {
    const { courseId } = useParams();
    const COURSES_API = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState<any>({_id: ""});
    const findCourseById = async (courseId: string) => {
        const response = await axios.get(`${COURSES_API}/${courseId}`);
        setCourse(response.data);
    }
    useEffect(() => {
        findCourseById(courseId ?? '');
    }, [courseId]);
    const { pathname } = useLocation();
    let currentSubPage = pathname.split("/").pop();
    currentSubPage = currentSubPage?.replace(/%20/g, " ");

    const [menuVisible, setMenuVisible] = useState(true);
    const toggleMenu = () => setMenuVisible(!menuVisible);

    return (
        <>
            <div >
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

            </div>
            <div>
                {/* Course navigation menu */}
                {menuVisible && <CourseNavigation />}
            </div>
        </>
    );
}
export default CourseHeader;