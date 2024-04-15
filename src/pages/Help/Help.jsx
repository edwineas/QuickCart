import React, { useState } from 'react';
import './Help.css'; // Import your custom CSS file to make the page attractive

const Help = () => {
  const [name, setName] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [issue, setIssue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
  }

  return (
    <div className="help">
      <h1>Help</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
          <input type="text" name="phoneNumber" placeholder='Phone Number' value={userPhoneNumber} onChange={e => setUserPhoneNumber(e.target.value)} />
          <input type="email" name="email" placeholder='Email' value={userEmail} onChange={e => setUserEmail(e.target.value)} />
          <textarea name="issue" value={issue} onChange={e => setIssue(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Help;
