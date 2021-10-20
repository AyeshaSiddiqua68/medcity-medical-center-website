import React from 'react';
import './About.css';
import logo2 from '../../images/bannerIcon/icon1.png'
import logo3 from '../../images/bannerIcon/icon4.png'
import logo4 from '../../images/bannerIcon/icon3.png'
import image from '../../images/about/about2.jpg'

// about page
const About = () => {
    return (
        <div>
            <div className="about-page">
                <h5 className="about-h5">WELCOME TO MEDCITY</h5>
                <h1 className="about-header">WHO WE ARE</h1>
            </div>
            <div className="row my-5">
                <div className="col-md-4">
                    <div>
                        <img className="w-50" src={logo2} alt="" />
                    </div>
                    <h3>Best Cardiology Treatment</h3>
                    <h5>Cardiac Electrophysiology</h5>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="w-50" src={logo3} alt="" />
                    </div>
                    <h3>Privacy Protected Blood Donation</h3>
                    <h5>Clinic Laboratory</h5>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="w-50" src={logo4} alt="" />
                    </div>
                    <h3>Best Pediatric Analysis</h3>
                    <h5>Quality Assurance</h5>
                </div>
            </div>
            <div className="row my-5 p-5 about-page">
                <div className="col-md-6">
                    <div><h1 className="about-header">Why Choose Us</h1></div>
                    <div className="row my-5 ">
                        <div className="col-md-4">
                            <div>
                                <img className="w-50" src={logo2} alt="" />
                            </div>

                        </div>
                        <div className="col-md-8">
                            <h3>Best Treatment System
                            </h3>
                            <h5>Advance Medical Equipments</h5>
                        </div>
                    </div>
                    <div className="row my-5 ">
                        <div className="col-md-4">
                            <div>
                                <img className="w-50" src={logo3} alt="" />
                            </div>

                        </div>
                        <div className="col-md-8">
                            <h3>100% Quality Assurance
                            </h3>
                            <h5>Clinic Laboratory</h5>
                        </div>
                    </div>
                    <div className="row my-5 ">
                        <div className="col-md-4">
                            <div>
                                <img className="w-50" src={logo4} alt="" />
                            </div>

                        </div>
                        <div className="col-md-8">
                            <h3>Blood Donation Bank
                            </h3>
                            <h5>Best Performance</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <img className="w-100" src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;