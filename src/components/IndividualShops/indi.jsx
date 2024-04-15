import React from 'react';
import { sampleImage } from '../../images';
import './indi.css';
import Shop from '../ShopList/Shop';

const data = [
    { image: sampleImage, name: 'Fresh Choice', address: 'Sample Address XYZ', rating: 4.5, openTime: '10:00 AM', closeTime: '08:00 PM' }
];

export default function indi() {
    return (
        <>
        <div className='outer-container'>
            <div className='iRow'>
                <div className='shopImage'>
                    <img src={data[0].image} alt="image" className='iImg'/>
                </div>
                <div className='shopDetails'>
                    <div className='shopName'>{data[0].name}</div>
                    <div className='shopAddress'>{data[0].address}</div>
                    <div className='shopContact'>{data[0].rating}</div>
                    <div className='shopContact'>Open from {data[0].openTime} to {data[0].closeTime}</div>
                </div>
            </div>
        </div>
        <div className="shops-container">
        {data.map((shop) => (
        <Shop key={shop.name} name={shop.name} /> // Pass shop details as props
      ))}
    </div>
        </>
    );
}
