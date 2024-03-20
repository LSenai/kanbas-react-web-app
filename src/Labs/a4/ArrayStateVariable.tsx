import React, { useState } from "react";

function ArrayStateVariable() {
  // Initialize the state with an array of integers
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  // Function to add a random element to the array
  const addElement = () => {
    // Create a new array by spreading the existing elements and adding a random number
    setArray([...array, Math.floor(Math.random() * 100)]); 
  };

  // Function to remove an element at a given index
  const deleteElement = (index: number) => {
    // Create a new array by filtering out the element at the specified index
    setArray(array.filter((item, i) => i !== index)); 
  };

  return (
    <div>
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success">Add Element</button>

      <ul style={{listStyleType: "none", padding: 0, width: "200px"}}>
        {array.map((item, index) => (
          <li key={index} className="mt-1 border" 
           style = {{
            width: "100%", // Ensure the list item takes the full width of its container
            display: "flex", 
            justifyContent: "space-between", // This pushes the delete button to the end
            alignItems: "center",
            padding: "0.1rem", // Add some padding for visual comfort
           }}> {/* Unique key for each list item */}
            {item} 
            {/* Button to delete the current item */}
            <button onClick={() => deleteElement(index)} className="btn btn-danger">Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;
