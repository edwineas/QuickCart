import React from 'react';
import './Grocery.css';
const Grocery = ({ name, price }) => {
  return (
    <>
    <div className='gRow'>
        <div className='iRow'>{name} &nbsp;&nbsp;&nbsp;&nbsp; price per kg:{price}</div>
    </div>
    <br></br>
    </>
  )
}

export default Grocery;
