import React, { useState } from 'react';
import './RegisterShop.css';

const RegisterShop = () => {
    const [form, setForm] = useState({
        shopName: '',
        ownerName: '',
        phoneNumber: '',
        email: '',
        shopLocation: '',
        shopType: '',
        password: '',
        license: null,
    });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleFileChange = (event) => {
        setForm({ ...form, license: event.target.files[0] });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="bodydiv">
            <form onSubmit={handleSubmit} className="register-form">
                <h1 className="form-title">Store Registration</h1>
                <div className="box-align">
                    <div className="row">
                        <div className="column">
                            <label className="form-label">
                                Shop Name:
                            </label>
                            <input type="text" name="shopName" onChange={handleChange} className="form-input" />
                        </div>
                        <div className="column">
                            <label className="form-label">
                                Owner's Name:
                            </label>
                            <input type="text" name="ownerName" onChange={handleChange} className="form-input" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label className="form-label">
                                Phone Number:
                            </label>
                            <input type="tel" name="phoneNumber" onChange={handleChange} className="form-input" />
                        </div>
                        <div className="column">
                            <label className="form-label">
                                Email Address:
                            </label>
                            <input type="email" name="email" onChange={handleChange} className="form-input" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-shop-location">
                            <label className="form-label">
                                Shop Location:
                            </label>
                            <input type="text" name="shopLocation" onChange={handleChange} className="form-input-shop-location" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label className="form-label">
                                Shop Type:
                            </label>
                            <input type="text" name="shopType" onChange={handleChange} className="form-input" />
                        </div>
                        <div className="column">
                            <label className="form-label">
                                Password:
                            </label>
                            <input type="password" name="password" onChange={handleChange} className="form-input" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label className="form-label-upload">
                                Upload License Certificate:
                            </label>
                            <input type="file" onChange={handleFileChange} className="form-input" />
                        </div>
                        <div className="column-btn">
                            <button type="submit" className="form-submit">Submit</button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default RegisterShop;
