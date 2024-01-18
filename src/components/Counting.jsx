import React, { useState } from 'react'

export default function Counting() {
    const [num , setNum] = useState(0)

    const incNum = () =>{

            setNum(num+1);
        
    };

    const decNum = () =>{
        setNum(num-1);
    };
  return (
      <div className="center_div" style={{background:"pink",  border:"2px solid", width:"20%",padding:"20px"}}>
        <h1 style={{text:"center", margin_left:"30px"}}>{num}</h1>
        <div className="btn_div">
            <button onClick={incNum} style={{background:"Pink", height:"50px", width:"100px", margin:"5px"}}>Postive</button>
            <button onClick={decNum} style={{background:"Pink", height:"50px", width:"100px"}}>Negtive</button>
        </div>
      </div>
    
  )
}
