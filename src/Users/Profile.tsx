import * as client from './client';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { KanbasState } from '../Kanbas/store';
import { setUser, resetUser } from './userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

/*     const fetchProfile = async () => {
        const account = await client.profile();
        setProfile(account);
    }; */

    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        setLoading(true);
        try {
            const updatedUser = await client.updateUser(user);
            dispatch(setUser(updatedUser));
            toast.success('Profile updated successfully!');
        } catch (error: any) {
            console.error('Failed to update the profile: ', error);
            // Displaying specific error messages from the server if available
            toast.error(`Failed to update the profile: ${error.response?.data?.message || 'Unknown error'}`);
        } finally {
            setLoading(false);
        }
    };
    
    

    const signout = async () => {
        client.signout().then((user) => {
            dispatch(resetUser(user));
        });
        navigate("/Kanbas/Account/Signin");
    };

    useEffect(() => {
        client.profile().then((user) => {
            dispatch(setUser(user));
            console.log(user);
        });
    }, [dispatch]);

    const user = useSelector((state: KanbasState) => state.userReducer.user);

    return (
        <div style={{maxWidth: '500px'}}>
            <h1>Profile</h1>
            <Link to="/Kanbas/Account/Admin/Users"
                className="btn btn-warning w-100">
                Users
            </Link>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            {user && (
                <form>
                    <div className="container">
                        <div className="row mb-3">
                            <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
                            <div className="col-sm-10">
                                <input id="username" className="form-control" value={user.username} onChange={(e) => 
                                    dispatch(setUser({ ...user, username: e.target.value }))} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                            <div className="col-sm-10">
                                <input type="password" id="password" className="form-control" value={user.password} onChange={(e) => 
                                    dispatch(setUser({ ...user, password: e.target.value }))} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name:</label>
                            <div className="col-sm-10">
                                <input id="firstName" className="form-control" value={user.firstName} onChange={(e) => 
                                    dispatch(setUser({ ...user, firstName: e.target.value }))} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name:</label>
                            <div className="col-sm-10">
                                <input id="lastName" className="form-control" value={user.lastName} onChange={(e) => 
                                    dispatch(setUser({ ...user, lastName: e.target.value }))} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth:</label>
                            <div className="col-sm-10">
                                <input type="date" id="dob" className="form-control" value={user.dob} onChange={(e) => 
                                    dispatch(setUser({ ...user, dob: e.target.value }))} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                            <div className="col-sm-10">
                                <input id="email" className="form-control" value={user.email} onChange={(e) => 
                                    dispatch(setUser({ ...user, email: e.target.value }))} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="role" className="col-sm-2 col-form-label">Role:</label>
                            <div className="col-sm-10">
                                <select id="role" className="form-select" value={user.role} onChange={(e) => 
                                    dispatch(setUser({ ...user, role: e.target.value }))}>
                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
                                    <option value="FACULTY">Faculty</option>
                                    <option value="STUDENT">Student</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-10 offset-sm-2">
                                <button onClick={handleSave} className="btn btn-primary" disabled={loading}>
                                    {loading ? 'Saving...' : 'Save'}
                                </button>
                                <button onClick={signout} className="btn btn-danger ms-2">Signout</button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

