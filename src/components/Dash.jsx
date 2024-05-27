import React from 'react'

const Dash = (props) => {
  return (
    <>
    <button onClick={props.sayHello} className={props.color}>{props.title}</button>
    </>
  )
}

export default Dash