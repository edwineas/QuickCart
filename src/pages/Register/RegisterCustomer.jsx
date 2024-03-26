import React from 'react';
import './RegisterCustomer.css';

const RegisterCustomer = () => {
  return (
    <div className="registerCustomer-container">
        <h1 className='registerCustomer-heading'>Customer Signup</h1>
      <form className="registerCustomer-form">
        <input className="registerCustomer-input" type="text" placeholder="Phone Number" />
        <input className="registerCustomer-input" type="text" placeholder="Username" />
        <input className="registerCustomer-input" type="password" placeholder="Password" />
        <input className="registerCustomer-input" type="password" placeholder="confirm password" />
        <button className="registerCustomer-button" type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default RegisterCustomer;
