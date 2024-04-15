import React from 'react';
import { sampleImage } from '../../images';
import './indi.css';

const data =[
    {image:sampleImage},
]
export default function indi() {
  return (
    <div>
        <div className='iRow'>
                <div className='iCard'>
                    <img src={data.image} alt="image" className='iImg'/>
                </div>
        </div>
    </div>
  )
}
