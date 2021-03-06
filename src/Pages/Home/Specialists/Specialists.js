import React, { useEffect, useState } from 'react';
import Specialist from '../Specialist/Specialist';
//specialists part for home page
const Specialists = () => {
    const [specialists, setSpecialists] = useState([])
    useEffect(() => {
        fetch('specialistsData.json')
            .then(res => res.json())
            .then(data => setSpecialists(data))
    }, [])
    return (
        <div id="specialist" className="container specialists-container ">
            <h1 className="fw-bold mt-5 pt-5">Meet Our Specialists</h1>
            <div className="row p-5 ">
                {
                    specialists.map(specialist => <Specialist key={specialist.id}
                        specialist={specialist}></Specialist>)
                }
            </div>
        </div>
    );
};

export default Specialists;