import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bapi from '../../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';
import './Login.css';
import { LoadingScreen } from '../../components';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
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
            if (error.response.status === 401) {
                // Incorrect password
                setErrorMessage("Incorrect Password");
            } else if (error.response.status === 404) {
                // Username doesn't exist
                setErrorMessage("Username doesn't exist");
            } else {
                // Other errors
                setErrorMessage("An error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLogin(e);
        }
    };

    return (
        <>
            {loading && <LoadingScreen />}
            <div className='login-main'>

                <div className="login-container">
                    <h1 className='loginhead'>Login</h1>
                    <input className='logininput' type="text" placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className='logininput' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDown} />
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <button className='loginbutton' onClick={handleLogin}>Login</button>
                    <a className='loginlink' href="/forgot-password">Forgot Password</a>
                    <Link to="/user-select" className='loginlink'>New User? Signup</Link>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
