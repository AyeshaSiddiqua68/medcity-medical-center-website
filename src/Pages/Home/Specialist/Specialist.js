import React from 'react';
import './Specialist.css'
//every single specialist for all specialists part
const Specialist = ({ specialist }) => {
    const { name, title, details, img } = specialist;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <div className=' specialist  '>
                <img className='image' src={img} alt="" />
                <h4 className=' mt-2'>{name}</h4>
                <h5 className='title'>{title}</h5>
                <p className='my-2'>{details}</p>
                <br />

                <button className='btn fw-bold'>Read More</button>
            </div>
        </div>
    );
};

export default Specialist;