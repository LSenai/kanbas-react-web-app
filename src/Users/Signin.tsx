import { useState } from 'react';
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
    const signin = async () => {
        try {
            await client.signin(credentials);
            navigate("/Kanbas/Account/Profile");
        }
        catch (e: any) {
            console.log(error);
            setError(e.response.data.message);
        }

    };
    return (
        <div>
            <h1>Signin</h1>
            {error && <div>{error}</div>}
            <label>Username</label> <br/>
            <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})} />
            <br/>
            <label>Password</label> <br/>
            <input value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}  />
            <br/>
            <button onClick={signin} className='btn btn-primary mt-1' >Signin</button>
        </div>
    )
}