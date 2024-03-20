import React, { useState } from "react";

function ObjectStateVariable() {
  // Initialize state with an object holding 'name' and 'age' properties
  const [person, setPerson] = useState({ name: "Peter", age: 24 });

  return (
    <div>
      <h2>Object State Variables</h2>

      {/* Display the current 'person' object as a formatted JSON string */}
      <pre>{JSON.stringify(person, null, 2)}</pre>

      {/* Input for modifying the 'name' property */}
      <input
        value={person.name}  
        onChange={(e) => {
          // Create a new object based on the current person, updating 'name' 
          setPerson({ ...person, name: e.target.value }); 
        }}
      />

      {/* Input for modifying the 'age' property */}
      <input
        value={person.age} 
        onChange={(e) => {
          // Ensure the new 'age' value is treated as a number
          setPerson({ ...person, age: parseInt(e.target.value) });
        }}
      />
    </div>
  );
}
export default ObjectStateVariable;
