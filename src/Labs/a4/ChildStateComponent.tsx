import React from "react";

function ChildStateComponent({ counter, setCounter }: 
                              { counter: number; setCounter: (counter: number) => void }) {
  return (
    <div>
      <h3>Counter {counter}</h3> 

      {/* Buttons use the setCounter function to update the parent's state */}
      <button onClick={() => setCounter(counter + 1)}
       className="btn btn-success me-2">Increment</button> 
      <button onClick={() => setCounter(counter - 1)}
       className="btn btn-danger">Decrement</button>
    </div>
  );
}
export default ChildStateComponent;