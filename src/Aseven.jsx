import React, { useState } from "react";

function Aseven() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddData = () => {
    setData([...data, inputValue]);
    setInputValue("");
  };

  const handleClearDuplicates = () => {
    const uniqueData = [...new Set(data)]; // Create a set to remove duplicates
    setData(uniqueData);
  };

  return (
    
    <div>
        <h1>7</h1>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter a value" />
      <button onClick={handleAddData}>Add Value</button>
      <button onClick={handleClearDuplicates}>Clear Duplicates</button>
      <br />
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Aseven;