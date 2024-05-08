import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Implement logic to send password reset email using email
    console.log('Sending password reset email to:', email);
    navigate('/login'); // Assuming you have a login route
  };

  return (
    <div className='forgot-main'>
        <div className='forgot-container'>
            <div className='forgothead'>
                Find Your Account
            </div>
            <hr></hr>
            <div className='forgotpara'>
            <p>Please enter your email address or mobile number to search for your account.</p>
            <input type='text' className='forgotinput' placeholder='Email address or mobile number'></input>
            </div>
            
            <hr></hr>
            <div className='forgot-btns'>
                <button className='cancelbutton' onClick={handleSubmit} >Cancel</button>
                <button className='searchbutton'>Search</button>
            </div>
        </div>
    </div>
  );
}

export default ForgotPassword;
