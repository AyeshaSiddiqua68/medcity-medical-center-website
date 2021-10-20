import React from 'react';
import AllSuccess from '../AllSuccess/AllSuccess';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Specialists from '../Specialists/Specialists';
//home page
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <AllSuccess></AllSuccess>
            <Specialists></Specialists>
        </div>
    );
};

export default Home;