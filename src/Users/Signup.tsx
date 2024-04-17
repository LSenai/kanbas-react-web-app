import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";


export default function Signup() {
    const [error, setError] = useState("");
    const [user, setUser] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleSignup = async (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // Prevent the default form submit action
        try {
            await client.signup(user);
            navigate("/Kanbas/Account/Profile");
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to sign up."); // More robust error handling
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-3">Signup</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSignup} className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input 
                        type="password"
                        className="form-control"
                        id="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    );
}
