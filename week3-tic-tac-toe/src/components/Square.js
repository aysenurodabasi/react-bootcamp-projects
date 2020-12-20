import React from 'react'
import './Square.css'
export default function Square({value,onClick}) {
  return (
     <div className="square" onClick={onClick}>{value}</div>
  )
}
