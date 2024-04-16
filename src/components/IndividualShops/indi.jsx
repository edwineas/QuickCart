import React from 'react';
import { useLocation } from 'react-router-dom';
import { star_rating as str, sampleImage } from '../../images';
import './Indi.css';
import SearchPage from '../../pages/SearchPage/SearchPage';

const data = [
    { image: sampleImage, name: 'Fresh Choice', address: 'Sample Address XYZ', rating: 4.5, openTime: '10:00 AM', closeTime: '08:00 PM' }
];

export default function Indi() {
    // const { state } = useLocation();
    // const { image, name, address, rating, openTime, closeTime } = state;
    const location = useLocation();
    const { image, name, address, rating, openTime, closeTime } = location.state;
    return (
        <>
        <div className='outer-container'>
            <div className='iRow'>
                <div className='shopImage'>
                    <img src={image} alt="image" className='iImg'/>
                </div>
                <div className='shopDetails'>
                    <div className='shopName'>{name}</div>
                    <div className='shopAddress'>{address}</div>
                    <div className='shopContact'><img src={str} alt="rating" id="starLogo" />{rating}</div>
                    <div className='shopContact'>Open from {openTime} to {closeTime}</div>
                </div>
            </div>
        </div>
        <div className="shops-container">
        <SearchPage />
        </div>
        </>
    );
};
