import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const user = {
            username: username,
            password: password,
        };
        try {
            const response = await axios.post('http://127.0.0.1:8000/login/', user);
            alert(response.data.status);
            console.log(response.data);
        } catch (error) {
            console.error(error);
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