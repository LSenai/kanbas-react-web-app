import React, { useState } from "react";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS", 
        due: "2024-10-10", completed: false, score: 0,
    });

    const [module, setModule] = useState({
        id: 1, name: "What is Human Rights?",
        description: "An opening discussion defining key terms and concepts in Human Rights", 
        course: "HR101"
    })
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
    const MODULE_URL = "http://localhost:4000/a5/module";

    return (
        <div>
            <h3>Working with Objects</h3>
            <h4>Retrieving Objects</h4>
            <a href="http://localhost:4000/a5/assignment"
                className="btn btn-primary">
                Get Assignment
            </a>
            <h4>Retrieving Properties</h4>
            <a href="http://localhost:4000/a5/assignment/title"
                className="btn btn-primary">
                Get Title
            </a>
            <h4>Modifying Properties</h4>
            {/* title */}
            <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
                className="btn btn-primary">Update Title
            </a>
            <input type="text" className="mx-2"
                onChange={(e) => 
                    setAssignment({...assignment,
                    title: e.target.value })}
                value={assignment.title}
            /> <br/>
            {/* score */}
            <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
                className="btn btn-primary">Update Score
            </a>
            <input type="number" max="100" className="mx-2 mt-2"
                onChange={(e) => 
                    setAssignment({...assignment,
                    score: parseInt(e.target.value)})}
                value={assignment.score}
            /> <br/>
            {/* completed */}
            <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
                className="btn btn-primary mt-2">Update Completed Status
            </a>
            <input type="checkbox" className="mx-2"
                onChange={(e) => 
                    setAssignment({...assignment,
                    completed: e.target.checked})}
                checked={assignment.completed}
            /><br/>

            <h4>3.4.2. Module Object</h4>
            <a href="http://localhost:4000/a5/module"
                className="btn btn-primary">
                Get Module
            </a> <br/>
            
            <a href={`${MODULE_URL}/name`}
                className="btn btn-primary mt-2">
                Get Name
            </a> <br/>

            <a href={`${MODULE_URL}/name/${module.name}`}
                className="btn btn-primary mt-2">Update Name
            </a>
            <input type="text" className="mx-2"
                onChange={(e) => 
                    setModule({...module,
                    name: e.target.value })}
                value={module.name}
            />

        </div>
    );
};

export default WorkingWithObjects;