import React, { useState } from 'react'
 
export default function UpparCase(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const cleartext = () => {
        let newText =  ' ';
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
const[text, setText] = useState("Enter Data")

  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <textarea className='form-control' id="myBox" value={text} onChange={handleOnChange}></textarea>
        <button className = 'btn btn-primary mx-2' onClick={handleUpClick}>To Uppar Case</button>
        <button className = 'btn btn-primary mx-2' onClick={handlelowerClick}>To lower Case</button>
        <button className = 'btn btn-primary mx-2' onClick={cleartext}>Clear Txt</button>
        <div className="container">
          <h1></h1>
          <p>Total Words is {text.split(" ").length}</p>
          <p>Total Charactor is {text.length}</p>
        </div>
    </div>
    </>
  )
}
