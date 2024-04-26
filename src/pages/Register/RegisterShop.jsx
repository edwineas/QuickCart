import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RegisterShop.css';

const RegisterShop = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const shopkeeperId = location.state.shopkeeper_id;
    

    const [form, setForm] = useState({
        shopName: '',
        ownerName: '',
        phoneNumber: '',
        email: '',
        shopLocation: '',
        openTime: '',
        closeTime: '',
        password: '',
        image: null,
    });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleFileChange = (event) => {
        setForm({ ...form, image: event.target.files[0] });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('shopkeeper', shopkeeperId);
        formData.append('name', form.shopName);
        formData.append('address', form.shopLocation);
        formData.append('phone_number', form.phoneNumber);
        formData.append('opening_time', form.openTime);
        formData.append('closing_time', form.closeTime);
        formData.append('image', form.image);

        fetch(`${process.env.REACT_APP_DJANGO_URL}/shops/create/`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                navigate('/login');
            } else {
                console.log(data);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
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
                                Phone Number:
                            </label>
                            <input type="tel" name="phoneNumber" onChange={handleChange} className="form-input" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-shop-location">
                            <label className="form-label">
                                Shop Address:
                            </label>
                            <input type="text" name="shopLocation" onChange={handleChange} className="form-input-shop-location" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label className="form-label">
                                Shop Opening Time:
                            </label>
                            <input type="time" name="openTime" onChange={handleChange} className="form-input" />
                        </div>
                        <div className="column">
                            <label className="form-label">
                                Shop Closing Time:
                            </label>
                            <input type="time" name="closeTime" onChange={handleChange} className="form-input" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label className="form-label-upload">
                                Upload image of shop:
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
