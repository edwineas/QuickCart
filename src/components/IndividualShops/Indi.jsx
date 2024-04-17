import React from 'react';
import { useLocation } from 'react-router-dom';
import { star_rating as str, sampleImage } from '../../images';
import './Indi.css';
import SearchPage from '../../pages/SearchPage/SearchPage';

const data = [
    { 
        image: sampleImage, 
        name: 'Fresh Choice', 
        address: 'Sample Address XYZ', 
        rating: 4.5, 
        openTime: '10:00 AM', 
        closeTime: '08:00 PM',
        contact: '123-456-7890'
    }
];

export default function Indi() {
    const location = useLocation();
    const { image, name, address, rating, openTime, closeTime, contact,} = location.state;
    return (
        <>
        
        <div className='outer-container'>
            <div className='shopName'><h1>{name}</h1></div>
            <div className='iRow'>
                <div className='shopDetails'>
                    <div className='shopAddress'>{address}</div>
                    <div className='shopContact'><img src={str} alt="rating" id="starLogo" />{rating}</div>
                    <div className='shopContact'><span>Contact: </span> {contact}</div>
                    <div className='shopContact'><span>Open time: </span> {openTime}</div>
                    <div className='shopContact'><span>Closing time: </span>{closeTime}</div>
                </div>
                <div className='shopImage'>
                    <img src={image} alt="image" className='iImg'/>
                </div>
            </div>
        </div>
        <div className="shops-container">
        <SearchPage />
        </div>
        </>
    );
};
