import React, { useState } from "react";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";

    const [todo, setTodo] = useState({id: 1});

    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a href={API}
                className="btn btn-primary">
              Get Todos  
            </a>

            <h4>Retrieving an Item from an Array by ID</h4>
            <input type="number" className="mx-2" value={todo.id}
                onChange={(e) => setTodo({ ...todo,
                id: parseInt(e.target.value) })}/>
            <a href={`${API}/${todo.id}`}
                className="btn btn-primary">
                Get Todo by ID
            </a>
            
            


        </div>
    );
};

export default WorkingWithArrays;

