import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Import Axios library

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/accounts/login/', {
                username: username,
                password: password
            });
            alert('Login Successful');  // Display alert for successful login
            // Redirect or navigate to the home page
        } catch (error) {
            console.error('Login failed:', error);
            // alert('Login failed. Please check your username and password.');  // Display alert for failed login
            alert(error);
        }
    };

    return (
        <>
            <div className='login-main'>
                <div className="login-container">
                    <h1 className='loginhead'>Login</h1>
                    <input className='logininput' type="text" placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className='logininput' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='loginbutton' onClick={handleLogin}>Login</button>
                    <a className='loginlink' href="/forgot-password">Forgot Password</a>
                    <Link to="/registershop" className='loginlink'>New User? Signup</Link>
                </div>
            </div>

        </>
    );
};

export default LoginPage;
