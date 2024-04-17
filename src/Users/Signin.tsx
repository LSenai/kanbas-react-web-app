import { FormEvent, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User } from './client';
import * as client from './client';

export default function Signin() {
    const [credentials, setCredentials ] = useState<User>({ 
        _id: '', 
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        role: 'USER'});
    
    const navigate = useNavigate();

    const [error, setError] = useState();
    const signin = async (event: FormEvent) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            await client.signin(credentials);
            navigate("/Kanbas/Account/Profile");
        } catch (e: any) {
            setError(e.response?.data?.message || 'Failed to sign in');
        }
    };

    return (
        <div>
            <h1>Signin</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={signin}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input 
                        id="username"
                        type="text"
                        className="form-control"
                        value={credentials.username} 
                        onChange={(e) => setCredentials({...credentials, username: e.target.value})} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        id="password"
                        type="password"
                        className="form-control"
                        value={credentials.password} 
                        onChange={(e) => setCredentials({...credentials, password: e.target.value})} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        </div>
    )
}