import React, { useState } from 'react';
import './Login.css';
//import navbar
import Navbar from '../../components/Navbar/Navbar';
// import navbar css

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here give a alert 
        alert('Login Successful');
    };

    return (
        <>
            <Navbar />
            <div className='login-main'>
                <div className="login-container">
                    <h1 className='loginhead'>Login</h1>
                    <input className='logininput' type="text" placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className='logininput' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='loginbutton' onClick={handleLogin}>Login</button>
                    <a className='loginlink' href="/forgot-password">Forgot Password</a>
                    <a className='loginlink' href="/signup">New User? Signup</a>
                </div>
            </div>

        </>
    );
};

export default LoginPage;
