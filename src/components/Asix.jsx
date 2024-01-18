import React, { useState } from 'react';

const Asix = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>6 Counter App</h1>
      <p>Counter Value: {counter}</p>
      <button onClick={incrementCounter} style={{color:'white', margin:"15px", background:"green"}}>Increment</button>
      <button onClick={decrementCounter} style={{color:'white', margin:"15px", background:"green"}} disabled={counter === 0}>Decrement</button>
    </div>
  );
};

export default Asix;