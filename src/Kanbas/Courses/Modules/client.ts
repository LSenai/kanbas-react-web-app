import axios from "axios";

const COURSES_API = "http://localhost:4000/api/courses";

// CREATE MODULE
export const createModule = async (courseId: string, module: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
}

export const findModulesForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
}