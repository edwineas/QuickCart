import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bapi from '../../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';
import './Login.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await bapi.post('/api/token/', { username, password });
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            localStorage.setItem('role', res.data.role);
            localStorage.setItem('userid', res.data.user_id);
            localStorage.setItem('isLoggedIn', 'true');

            if (res.data.role === 'shopkeeper') {
                localStorage.setItem('shopId', res.data.shop_id);
            }
            navigate('/');
        } catch (error) {
            console.log(error);
            if (error.response.status === 401) {
                // Incorrect password
                alert("Incorrect Password");
            } else if (error.response.status === 404) {
                // Username doesn't exist
                alert("Username doesn't exist");
            } else {
                // Other errors
                alert("An error occurred. Please try again later.");
            }
        } finally {
            setLoading(false);
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
                    <Link to="/user-select" className='loginlink'>New User? Signup</Link>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
