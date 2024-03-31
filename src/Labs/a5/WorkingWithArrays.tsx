import React, { useEffect, useState } from "react";
import axios from 'axios';


function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";

    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS", 
        due: "2024-09-09",
        completed: false,
     });

     const [todos, setTodos] = useState([]);

     const fetchTodos = async() => {
        const response = await axios.get(API);
        setTodos(response.data)
     };
     const removeTodo = async(todo: any) => {
        const response = await axios.get(`${API}/${todo.id}/delete`);
        setTodos(response.data)
     };
     const fetchTodoById = async(id: number) => {
        const response = await axios.get(`${API}/${id}`)
        setTodo(response.data)
     };
     const createTodo = async() => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data)
     };
     const updateTitle = async() => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data)
     }

     useEffect(() => {
        fetchTodos();
     }, []);

    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Fetching Arrays (using Axios)</h4>
            <label htmlFor="todo-id-display" className="me-1"
            title="These fields are read-only. To edit, use the input fields below">
                Verify ID: </label>
            <input className="mb-1" value={todo.id} id="todo-id-display" 
            title="These fields are read-only. To edit, use the input fields below" readOnly/> <br/>
            <label htmlFor="todo-title-display" className="me-1"
            title="These fields are read-only. To edit, use the input fields below">
                Verify Title: </label>
            <input className="mb-1" value={todo.title} id="todo-title-display" 
            title="These fields are read-only. To edit, use the input fields below" readOnly/> <br/>
            <button className="btn btn-primary w-25 mb-1"
            onClick={()=> createTodo()}>
                Create Todo
            </button> <br/>
            <button className="btn btn-success w-25 mb-1" onClick={updateTitle}>
                Update Title
            </button>
            <ul className="list-group">
                {todos.map((todo: { id: number, title: string }) => (
                <li key={todo.id} className="list-group-item w-25">
                    <button className="float-end btn btn-danger"
                    onClick={() => removeTodo(todo)}>
                        Remove
                    </button>
                    <button className="float-end btn btn-warning mx-2"
                    onClick={()=> fetchTodoById(todo.id)}>
                        Edit
                    </button>
                    {todo.title}
                </li>
                ))}
            </ul>
            <input type="number" value={todo.id}
                onChange={(e) => setTodo({ ...todo,
                    id: parseInt(e.target.value) })}
            /> <br/>
            <input type="text"  className="mt-2" value={todo.title}
                onChange={(e) => setTodo({...todo, title: e.target.value})}
            /> <br/>
            <textarea className="mt-2 form-control" 
                style={{ width: '300px' }} rows={2} 
                value={todo.description} onChange={(e) => setTodo({
                    ...todo, description: e.target.value})}
            />
            <label htmlFor="completedEditor">Completed?</label>
            <input type="checkbox" id="completedEditor" className="mx-2" checked={todo.completed}
                onChange={(e) => setTodo({...todo, completed: e.target.checked})}/>
            
            {/* UPDATE */}
            <h3>Updating an Item in an Array</h3>
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary">
                Update Todo #{todo.id} Title to {todo.title}
            </a> <br/>
            <a href={`${API}/${todo.id}/description/${todo.description}`} className='btn btn-primary mt-2'>
                Update Todo #{todo.id} Description
            </a> <br/>
            <a href={`${API}/${todo.id}/completed/${todo.completed}`} className='btn btn-primary mt-2'>
                Update Todo #{todo.id} Completed to: {`${todo.completed}`}
            </a>


            {/* READ operations */}
            <h4>Retrieving Arrays</h4>
            <a href={API}
                className="btn btn-primary">
              Get Todos  
            </a>

            <h4>Retrieving an Item from an Array by ID</h4>
            <a href={`${API}/${todo.id}`}
                className="btn btn-primary">
                Get Todo by ID
            </a>

            <h4>Filtering Array Items</h4>
            <a href={`${API}?completed=true`} className="btn btn-primary">
                Get Completed Todos
            </a>

            {/* CREATE operations */}
            <h3>Creating new Items in an Array</h3>
            <a href={`${API}/create`} className="btn btn-primary">
                Create Todo
            </a>
            
            {/* DELETE */}
            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`} className="btn btn-primary">
                Delete Todo with ID = {todo.id}
            </a>
        </div>
    );
};

export default WorkingWithArrays;

