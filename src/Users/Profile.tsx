import * as client from './client';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
    const [profile, setProfile] = useState({
        username: '', password: '', firstName: '', lastName: '', dob: '', email: '', role: 'USER'
    });    
    const navigate = useNavigate();

    const fetchProfile = async () => {
        const account = await client.profile();
        setProfile(account);
    };

    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        try {
            setLoading(true); // start loading
            const updatedProfile = await client.updateUser(profile);
            setProfile(updatedProfile); // update the state with the latest data
            alert('Profile saved successfully'); 
        } catch (e) {
            console.error('Failed to update the profile:', e);            
            alert('Failed to save profile');
        } finally {
            setLoading(false); // end loading
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div style={{maxWidth: '500px'}}>
            <h1>Profile</h1>
            <Link to="/Kanbas/Account/Admin/Users"
                className="btn btn-warning w-100">
                Users
            </Link>
            {profile && (
                <form>
                    <div className="container">
                        <div className="row mb-3">
                            <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
                            <div className="col-sm-10">
                                <input id="username" className="form-control" value={profile.username} onChange={(e) => 
                                    setProfile({ ...profile, username: e.target.value })} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                            <div className="col-sm-10">
                                <input type="password" id="password" className="form-control" value={profile.password} onChange={(e) => 
                                    setProfile({ ...profile, password: e.target.value })} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name:</label>
                            <div className="col-sm-10">
                                <input id="firstName" className="form-control" value={profile.firstName} onChange={(e) => 
                                    setProfile({ ...profile, firstName: e.target.value })} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name:</label>
                            <div className="col-sm-10">
                                <input id="lastName" className="form-control" value={profile.lastName} onChange={(e) => 
                                    setProfile({ ...profile, lastName: e.target.value })} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth:</label>
                            <div className="col-sm-10">
                                <input type="date" id="dob" className="form-control" value={profile.dob} onChange={(e) => 
                                    setProfile({ ...profile, dob: e.target.value })} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                            <div className="col-sm-10">
                                <input id="email" className="form-control" value={profile.email} onChange={(e) => 
                                    setProfile({ ...profile, email: e.target.value })} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="role" className="col-sm-2 col-form-label">Role:</label>
                            <div className="col-sm-10">
                                <select id="role" className="form-select" value={profile.role} onChange={(e) => 
                                    setProfile({ ...profile, role: e.target.value })}>
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
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}
