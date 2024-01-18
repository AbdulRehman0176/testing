import React, { useState } from 'react';

const Athree = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [factorialResult, setFactorialResult] = useState(null);

  const calculateFactorial = () => {
    const number = parseInt(inputNumber);

    if (isNaN(number)) {
      // Display an error message if the input is not a valid number
      setFactorialResult('Please enter a valid number.');
    } else {
      // Calculate factorial
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      setFactorialResult(`The factorial of ${number} is: ${result}`);
    }
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <label>
        Enter a number:
        <input
          type="text"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />
      </label>
      <button onClick={calculateFactorial} style={{color:'white', margin:"15px", background:"green"}}>Calculate Factorial</button>
      {factorialResult !== null && <p>{factorialResult}</p>}
    </div>
  );
};

export default Athree;
