import React, { useState } from 'react'

export default function Task(props) {
    const[text , setText] = useState()
    const[list , setlist] = useState()
    const handleAdd = () => {
        setlist([...list, text]);
        setText("")
    }


    const handleDisplay = () => {
        console.log("Element" , text)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    
    
  return (
    <>
    <input className='form-control' id="myBox" value={text} onChange={handleOnChange}></input>
    <button className = 'btn btn-primary mx-2' onClick={handleAdd}>Add</button>
    <button className = 'btn btn-primary mx-2' onClick={handleDisplay}>Display</button>
    </>
  )
}
