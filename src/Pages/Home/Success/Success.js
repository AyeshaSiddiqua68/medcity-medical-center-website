import React from 'react';
import './Success.css'

const Success = ({ success }) => {
    const { img, details } = success;
    return (
        <div className="col-lg-3 col-sm-6 col-12">
            <div className=' success  '>
                <img className='image' src={img} alt="" />
                <h4 className=' p-4'>{details}</h4>
            </div>
        </div>
    );
};

export default Success;