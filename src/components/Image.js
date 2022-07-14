import React from 'react'
import '../App.css'
const Image = (props) => {
  return (
    <div>
          <img style={{ height:"100%" , width:"100%",objectFit:"contain"}} src={props.image} alt="not  foound"></img>
    </div>
  )
}

export default Image