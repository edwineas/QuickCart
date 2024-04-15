import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bapi from '../../api'; // Importing bapi instance
import './Shopkeeper.css';

const Shopkeeper = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await bapi.post('/register/Shopkeeper/', {
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
      });

      if (response.data.status === 'success') {
        navigate('/registershop');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="Shopkeeper-container">
      <h1 className='Shopkeeper-heading'>Shopkeeper Signup</h1>
      <form className="Shopkeeper-form" onSubmit={handleSubmit}>
        <input className="Shopkeeper-input" type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input className="Shopkeeper-input" type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <input className="Shopkeeper-input" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="Shopkeeper-input" type="text" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        <input className="Shopkeeper-input" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="Shopkeeper-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input className="Shopkeeper-input" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <button className="Shopkeeper-button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Shopkeeper;