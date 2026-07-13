import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <div className="top">
          <img src={props.image} alt=''></img>
          <button>Save </button>
        </div>
        <div className="center">
          <h3> {props.company} <span> {props.time} </span></h3>
          <h2> {props.designation} </h2>
          <div className='tag'>
            <h4> {props.type} </h4> 
            <h4> {props.level} </h4>
          </div>
        </div>
        <div className="bottom">
           <div>
            <h3> {props.pay} </h3>
            <p> {props.location} </p>
           </div>
           <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card