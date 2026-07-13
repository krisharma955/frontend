import React from 'react'

const Card = (props) => {

  return (
    <div className="card">
        <img src={props.img}></img>
        <h1>Name: {props.user} </h1>
        <h1>Age: {props.age} </h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card