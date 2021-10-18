import React from 'react';
import AllSuccess from '../AllSuccess/AllSuccess';
import Services from '../Services/Services';
import Specialists from '../Specialists/Specialists';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <AllSuccess></AllSuccess>
            <Specialists></Specialists>
        </div>
    );
};

export default Home;