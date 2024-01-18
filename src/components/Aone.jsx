import React, { useState } from 'react';

const Aone = () => {
  const [inputString, setInputString] = useState('');
  const [reversedString, setReversedString] = useState('');

  const reverseString = () => {
    let reversed = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversed += inputString[i];
    }
    setReversedString(reversed);
  };

  const convertToUppercase = () => {
    setReversedString(reversedString.toUpperCase());
  };

  const convertToLowercase = () => {
    setReversedString(reversedString.toLowerCase());
  };

  return (
    <div>
      <label>  Please Enter Any text <input type="text" value={inputString} onChange={(e) => setInputString(e.target.value)} />  </label>
      <br />
      <button onClick={reverseString} style={{color:'white', margin:"15px", background:"green"}}>Reverse</button>
      <button onClick={convertToUppercase}style={{color:'white', margin:"15px", background:"green"}} >Uppercase</button>
      <button onClick={convertToLowercase}style={{color:'white', margin:"15px", background:"green"}}>Lowercase</button>
      <br />
       {reversedString}
    </div>
  );
};

export default Aone;
