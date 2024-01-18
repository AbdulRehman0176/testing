import React, { useState } from 'react';

const Afour = () => {
  const [inputArray, setInputArray] = useState('');
  const [maxValue, setMaxValue] = useState(null);
  const [minValue, setMinValue] = useState(null);

  const findMinMaxValues = () => {
    const array = inputArray.split(',').map(item => parseInt(item.trim()));

    if (array.some(isNaN)) {
      setMaxValue(null);
      setMinValue(null);
      return;
    }

    if (array.length === 0) {
      setMaxValue(null);
      setMinValue(null);
      return;
    }

    const max = Math.max(...array);
    const min = Math.min(...array);

    setMaxValue(max);
    setMinValue(min);
  };

  const handleInputChange = (event) => {
    setInputArray(event.target.value);
  };

  return (
    <div className='mt-5'>
      <label>
        <input className='minmaxinput' type="text" placeholder='Enter Number' value={inputArray} onChange={handleInputChange} />
      </label>
      <br />
      <button className='minmaxbutton' onClick={findMinMaxValues} style={{color:'white', margin:"15px", background:"green"}}>Find Min and Max</button>
      <br />
      {maxValue !== null && minValue !== null && (
        <div>
          <p>Array: [{inputArray}]</p>
          <p>Maximum Value: {maxValue}</p>
          <p>Minimum Value: {minValue}</p>
        </div>
      )}
      {(maxValue === null || minValue === null) && (
        <p>Please enter a valid array of numbers.</p>
      )}
    </div>
  );
};

export default Afour;