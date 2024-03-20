import React, { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";

function ParentStateComponent() {
  // Initialize counter state
  const [counter, setCounter] = useState(123); 

  return (
    <div>
      <h2>Counter {counter}</h2>

      {/* Passing state and updater function as props to the child */}
      <ChildStateComponent counter={counter} setCounter={setCounter} /> 
    </div>
  );
}
export default ParentStateComponent;
