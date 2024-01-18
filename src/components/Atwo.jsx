// import React, { useState } from 'react';

// const Atwo = () => {
//   const [inputString, setInputString] = useState('');
//   const [aPalindrome, setIsPalindrome] = useState(null);

//   const checkPalindrome = () => {
//     let cleanString = inputString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//     let isPalin = true;

//     for (let i = 0; i < Math.floor(cleanString.length / 2); i++) {
//       if (cleanString[i] !== cleanString[cleanString.length - 1 - i]) {
//         isPalin = false;
//         break;
//       }
//     }

//     setIsPalindrome(isPalin);
//   };

//   return (
//     <div>
//       <label> Enter a string: <input   type="text"   value={inputString}   onChange={(e) => setInputString(e.target.value)} /></label>
//       <br />
//       <button onClick={checkPalindrome} style={{color:'white', margin:"15px", background:"green"}}>Check Palindrome</button>
//       <br />
//       {aPalindrome !== null && (
//         <div>
//           {aPalindrome ? (  <p>The entered string is a palindrome!</p>  ) : (  <p>The entered string is not a palindrome.</p>  )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Atwo;


   
import React, { useState } from 'react'

export default function Atwo() {
  const [aPalindrome , setIsPalindrome] = useState();
  
  const checkPalindrome = () =>{
    var len = aPalindrome.length;
    var msg = 'palindrom string';
    for(var i = 0; i < len/2; i++){
      if(aPalindrome[i] != aPalindrome(len - 1 - i)){
        msg = 'Not a palindrom';
      }
      
    }
  }
  return (
    <>
    <p> Enter value check palindrom <input type='text' value={aPalindrome} onChange={(event) => setIsPalindrome(event.target.value)}></input></p>
    <button onClick={checkPalindrome}>Check Palindrom</button>
    </>
  )
}
