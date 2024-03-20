import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { LabState } from "../../../store";

function AddRedux() {
  const [a, setA] = useState(12); // Local state to store the first number
  const [b, setB] = useState(23); // Local state to store the second number

  // Get the 'sum' from the Redux store
  const { sum } = useSelector((state: LabState) => state.addReducer); 

  // Get a reference to the dispatch function for triggering actions
  const dispatch = useDispatch(); 

  return (
    <div className="w-25">
      <h1>Add Redux</h1>
      <h2>
        {a} + {b} = {sum} 
      </h2> 
      <input
        // Input for updating the 'a' value in local state 
        type="number"
        value={a} 
        onChange={(e) => setA(parseInt(e.target.value))} 
        className="form-control"
      />
      <input
        // Input for updating the 'b' value in local state 
        type="number"
        value={b} 
        onChange={(e) => setB(parseInt(e.target.value))} 
        className="form-control"
      />
      <button
        // Button to dispatch the 'add' action, triggering the calculation
        onClick={() => dispatch(add({ a, b }))} 
        className="btn btn-primary"
      >
        Add Redux
      </button>
    </div>
  );
}
export default AddRedux;
