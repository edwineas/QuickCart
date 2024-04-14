import React, { useState } from 'react';
import './RegisterCustomer.css';

const RegisterCustomer = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    fetch('http://localhost:8000/register/', {  // replace with your Django server's URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact_number: phoneNumber,
        username: username,
        password: password,
        email: email,
        first_name: firstName,
        last_name: lastName,
        user_type: 'customer',  // assuming user_type is 'customer' for this form
        is_active: true,  // assuming is_active is always true for this form
        // add any other fields as necessary
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="registerCustomer-container">
      <h1 className='registerCustomer-heading'>Customer Signup</h1>
      <form className="registerCustomer-form" onSubmit={handleSubmit}>
        <input className="registerCustomer-input" type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input className="registerCustomer-input" type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <input className="registerCustomer-input" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="registerCustomer-input" type="text" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        <input className="registerCustomer-input" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="registerCustomer-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input className="registerCustomer-input" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <button className="registerCustomer-button" type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default RegisterCustomer;