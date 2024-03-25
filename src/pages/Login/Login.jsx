import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { RegisterShop } from '../Register/RegisterShop'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here give a alert 
        alert('Login Successful');
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
