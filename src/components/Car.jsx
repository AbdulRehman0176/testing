import React from 'react'

export default function Car(props) {
  return (
    <div>
      <img src={props.carImg} />
      <h1>{props.carName}</h1>
      <h4>{props.addres}</h4>
      <p>{props.description}</p>
    </div>
  )
}
