import React, { useState } from 'react';

const Afive = () => {
  const [inputArray, setInputArray] = useState('');
  const [sortedArray, setSortedArray] = useState(null);

  const sortArray = () => {
    const array = inputArray.split(',').map(item => parseFloat(item.trim()));

    if (array.some(isNaN)) {
      setSortedArray(null);
      return;
    }

    const sorted = array.slice().sort((a, b) => a - b);
    setSortedArray(sorted);
  };

  const handleInputChange = (event) => {
    setInputArray(event.target.value);
  };

  return (
    <div>
      <label>
        <h1>5 Array Sorter</h1>
        Enter an array (comma-separated numbers):
        <input type="text" value={inputArray} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={sortArray} style={{color:'white', margin:"15px", background:"green"}}>Sort Array</button>
      <br />
      {sortedArray !== null && (
        <div>
          <p>Original Array: [{inputArray}]</p>
          <p>Sorted Array: [{sortedArray.join(', ')}]</p>
        </div>
      )}
      {sortedArray === null && (
        <p>Please enter a valid array of numbers.</p>
      )}
    </div>
  );
};

export default Afive;