import React, { useState } from 'react';

const Aeight = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleClear = () => {
    setInputValue('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(inputValue);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='calcultor'>
      <h1>8 Simple Calculator</h1>
      <input type="text" value={inputValue} readOnly />
      <br />
      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <button onClick={() => handleButtonClick('+')}>+</button>
      <br />
      <button onClick={() => handleButtonClick('4')}>4</button>
      <button onClick={() => handleButtonClick('5')}>5</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <button onClick={() => handleButtonClick('-')}>-</button>
      <br />
      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <button onClick={() => handleButtonClick('*')}>*</button>
      <br />
      <button onClick={() => handleButtonClick('0')}>0</button>
      <button onClick={() => handleClear()}>C</button>
      <button onClick={() => handleCalculate()}>=</button>
      <button onClick={() => handleButtonClick('/')}>/</button>
      <br />
      <p>Result: {result}</p>
    </div>
  );
};

export default Aeight;