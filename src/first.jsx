import React from 'react'
import "./first.css"
import Style from './first.module.css'

function first() {
    const mystyle = {
        color: "green"
      };
  return (
    <>
    <h1 className='main'>haljks</h1>
    <h2 className={Style.main}>gvjhbk</h2>
    <h3 style={mystyle}>rfytghjk</h3>
    </>
  )
}

export default first