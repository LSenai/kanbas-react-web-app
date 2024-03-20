import React, { useState } from "react";

function StringStateVariables() {
  // Declare a state variable named 'firstName' initialized with "John"
  const [firstName, setFirstName] = useState("Leo");

  return (
    <div>
      <h2>String State Variables</h2> 
      {/* Display the current value of the 'firstName' state variable */}
      <p>{firstName}</p>

      {/* Input field: */}
      <input
        className="form-control" 
        value={firstName}       // Controlled input - value bound to state
        onChange={(e) => {
            // setFirstName is a special function provided by useState to update state
            // It triggers React to re-render with the new firstName value
            // Note: setFirstName doesn't directly mutate the original state, but facilitates an immutable update process 
            setFirstName(e.target.value) 
          }} 
        style = {{width: "200px"}}
      />
    </div>
  );
}
export default StringStateVariables;
