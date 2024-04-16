import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsFillCheckCircleFill, BsPencil } from "react-icons/bs";
import * as client from "./client";
import { User } from "./client";

import { FaPlus, FaCheckCircle } from 'react-icons/fa';
import { AxiosError } from "axios";

export default function UserTable() {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User>({
        _id: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        role: "USER",
    });

    const handleCreateUser = async () => {
    try {
        const newUser = await client.createUser(user);
        console.log("New user created:", newUser);
        setUsers([...users, newUser]);
        // Optionally clear the form here if desired
        setUser({
            _id: "",
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            dob: "",
            role: "USER",
        });
    } catch (error) {
        console.error("Failed to create user:", error);
        alert("Failed to create user");
    }
    };

    const handleDeleteUser = async (user: User) => {
        try { 
            await client.deleteUser(user);
            // Update the state to filter out the deleted user
            setUsers(users => users.filter(u => u._id !== user._id));
            alert("User deleted successfully");
        } catch (error) {
            if ((error as AxiosError).response) {
                if ((error as AxiosError).response?.status === 404) {
                    alert("User not found");
                } else {
                    alert("Failed to delete user");
                }
            } else {
                // Handling errors not related to a bad response (network issues, etc.)
                console.error("Error deleting user:", error);
                alert("Failed to delete user");
            }
        }
    };

    const handleSelectUser = async (user: User) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (error) {
            console.error("Failed to select user:", error);
            alert("Failed to select user");
        }
    }

    const handleUpdateUser = async () => {
        try {
            const updatedUser = await client.updateUser(user);
            // Update the state with the updated user
            setUsers(users => users.map(u => u._id === updatedUser._id ? updatedUser : u));
            // clear form
            setUser({
                _id: "",
                username: "",
                password: "",
                firstName: "",
                lastName: "",
                email: "",
                dob: "",
                role: "USER",
            });
            alert("User updated successfully");
        } catch (error) {
            console.error("Failed to update user:", error);
            alert("Failed to update user");
        }
    }

    const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
    };

    useEffect(() => { 
    fetchUsers(); 
    }, []);

    return (
    <div className="container mt-4">
        <h1>User Table</h1>
        <div className="table-responsive">
        <table className="table table-hover table-striped">
            <thead className="table-dark">
                <tr>
                    <th scope="col">Role</th>
                    <th scope="col">Username</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{maxWidth: '50px'}}>
                        <select className="form-select" value={user.role} onChange={(e) =>
                            setUser({ ...user, role: e.target.value })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </td>
                    <td style={{maxWidth: '170px'}}>
                        <div className="d-flex">
                            <input
                                className="form-control me-2"
                                style={{flex: 1}}
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                            />
                            {/* Passowrd */}
                            <input
                                className="form-control"
                                style={{flex: 1}}
                                placeholder="Password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                        </div>
                    </td>
                    <td>
                        <input
                            className="form-control"
                            value={user.firstName}
                            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            className="form-control"
                            value={user.lastName}
                            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                        />
                    </td>
                    <td className="text-nowrap" style={{ textAlign: 'center', verticalAlign: 'middle'}}>
                        <div className="d-flex">
                            <button className="me-2 btn btn-success"
                                    onClick={handleUpdateUser}
                                    style={{
                                        borderRadius: '50%', 
                                        width: '40px', 
                                        height: '40px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        padding: '0'
                                    }}
                                    aria-label="Confirm Update">
                                    <FaCheckCircle />
                            </button>
                            <button className="btn btn-success" onClick={handleCreateUser}
                                style={{
                                borderRadius: '50%', 
                                width: '40px', 
                                height: '40px', 
                                padding: '0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                                }}>
                                <FaPlus />
                            </button>
                        </div>
                    </td>
                </tr>
                {users.map((user) => (
                <tr key={user._id}>
                    <td>{user.role}</td>
                    <td>{user.username}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>
                        <button className="btn btn-danger me-1" onClick={() => handleDeleteUser(user)}><BsTrash3Fill/></button>
                        <button className="btn btn-warning" onClick={() => handleSelectUser(user)}><BsPencil/></button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
    );
}
