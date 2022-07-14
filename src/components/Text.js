import React from 'react'
import './Text.css'
const Text = (props) => {
  return (
    <div>
       <div>
           <h1 className="MainHeading">{props.heading}</h1>
           <p className="SubHeading">{props.text}</p>
           <p className="percentage">{props.percentage}</p>
       </div>
    </div>
  )
}

export default Text