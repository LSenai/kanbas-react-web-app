import React, { useState } from "react";

function DateStateVariable() {
  // Initialize state with the current date
  const [startDate, setStartDate] = useState(new Date());

  // Helper function to convert a Date to the HTML date input format (YYYY-MM-DD)
  const dateObjectToHtmlDateString = (date: Date) => { 
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  };

  return (
    <div>
      <h2>Date State Variables</h2>
      {/* Display raw JSON representation of the date for demonstration */}
      <h3>{JSON.stringify(startDate)}</h3>

      {/* Display the formatted date string */}
      <h3>{dateObjectToHtmlDateString(startDate)}</h3> 

      <input
        className="form-control"
        type="date"
        // Value linked to the formatted date (ensures input displays desired format)
        value={dateObjectToHtmlDateString(startDate)} 
        // Updates the state on input change
        onChange={(e) => setStartDate(new Date(e.target.value))} 
      />
    </div>
  );
}
export default DateStateVariable;
