import axios from "axios";
export const BASE_API = process.env.REACT_APP_API_BASE;
export const USERS_API = `${BASE_API}/api/users`;

// axios.defaults.withCredentials = true;

export interface User {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    role: string;
}

export const signin = async (credentials: User) => {
    const response = await axios.post( `${USERS_API}/signin`, credentials, { withCredentials: true } );
    return response.data;
};
  
export const profile = async () => {
    const response = await axios.post(`${USERS_API}/profile`, { withCredentials: true });
    return response.data;
}

export const updateUser = async (user: any) => {
    const response = await axios.put(`${USERS_API}/${user._id}`, user, { withCredentials: true });
    return response.data;
}

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API, { withCredentials: true });
    return response.data;
}

export const createUser = async (user: any) => {
    const response = await axios.post(USERS_API, user, { withCredentials: true });
    return response.data;
}

export const deleteUser = async (user: any) => {
    try {
        const response = await axios.delete(`${USERS_API}/${user._id}`, { withCredentials: true });
        return response.data;  // In case there's any message sent from the server, but there shouldn't be
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export const findUserById = async (userId: string) => {
    const response = await axios.get(`${USERS_API}/${userId}`, { withCredentials: true });
    return response.data;
}