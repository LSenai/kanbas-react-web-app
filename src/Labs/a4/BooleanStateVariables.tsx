import React, { useState } from "react";

function BooleanStateVariables() {
  // Declare a state variable named 'done' initialized as true
  const [done, setDone] = useState(true);

  return (
    <div>
      <h2>Boolean State Variables</h2> 
      {/* Conditional rendering: Display 'Done' if 'done' is true, 'Not done' otherwise */} 
      <p>{done ? "Done" : "Not done"}</p> 

      <div style={{display: 'inline-block', minWidth: '200px'}}>
            <label className="form-control">
                {/* Checkbox: Its checked state is bound to the 'done' variable */}
                <input type="checkbox" checked={done} 
                    onChange={() => setDone(!done)} />  
                Done
            </label>

            {/* Conditional rendering: Display success message only if 'done' is true */}
            {done && <div className="alert alert-success">
                        Yay! you are done
                    </div>}  
            </div>
      </div>
  );
}
export default BooleanStateVariables;
