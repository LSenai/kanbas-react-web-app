import axios from "axios";

const COURSES_API = "http://localhost:4000/api/courses";

export const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    return response.data;
}

export const addNewCourse = async (course: any) => {
    const response = await axios.post(COURSES_API, course);
    return response.data;
    }

export const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    return response.data;
}

export const updateCourse = async (course: any) => {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);
    return response.data;
}

export const findCourseById = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}`);
    return response.data;
}