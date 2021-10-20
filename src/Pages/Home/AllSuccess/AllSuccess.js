import React, { useEffect, useState } from 'react';
import Success from '../Success/Success';
import './AllSuccess.css'
//home page success part
const AllSuccess = () => {
    const [allSuccess, setAllSuccess] = useState([])
    useEffect(() => {
        fetch('successData.json')
            .then(res => res.json())
            .then(data => setAllSuccess(data))
    }, [])

    return (
        <div id="success" className="container success-container ">
            <h1 className="fw-bold text-white mt-5 pt-5">Our Success</h1>
            <h5 className="text-white">Medcity Has Touched The Lives Of Patients & Providing Care For The Sickest In Our Community.</h5>
            <div className="row p-5 ">
                {
                    allSuccess.map(success => <Success key={success.id}
                        success={success}></Success>)
                }
            </div>
            <p className='text-white p-2'><strong>We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</strong></p>
        </div>
    );
};

export default AllSuccess;