import React from 'react';
import './Service.css'

const Sevice = ({ service }) => {
    const { name, description, img, point1, point2, point3 } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            {name}
            {description}
            <ul>
                <li>{point1}</li>
                <li>{point2}</li>
                <li>{point3}</li>
            </ul>
        </div>
    );
};

export default Sevice;