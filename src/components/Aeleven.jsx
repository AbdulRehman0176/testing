import React, { useState } from 'react'

export default function Aeleven() {
    const [name , setname] = useState('')
    const [error , seterror] = useState(false)
    const handleSubmit=(e)=>{
        if(name.length == 0){
            seterror(true)
        }
        e.preventDefault();
        console.log(name)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <input onChange={e=>setname(e.target.value)} />
        </div>
        {error&&name.length>=0?
        <label>Name field can't empty please</label>:""}
        <div>
            <button style={{color:'white', margin:"15px", background:"green"}}>Submite</button>
        </div>
    </form>
    </>
  )
}
