import React from "react";
import "./Footer.css";
import logo from '../../../../images/logo/logo.png'
import Button from 'react-bootstrap/Button'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"

const Footer = () => {
    return (
        <div>
            <div className="footer-container mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <div className="d-flex">
                                    <img className="roundedCircle" src={logo} alt="" />
                                    <h1 className="text">Medical Center</h1>
                                </div>

                                <p className="mt-4 ">
                                    <small>
                                        We are very proud to announce that since 2010 we are spreading awesomness to our community and we have helped a lots of people! we hope we are doing best we can.
                                    </small>
                                </p>
                                <div className="social-icon">
                                    <p>
                                        <Router>
                                            <Link target="_blank" to="https://www.instagram.com/akhiazad6868/"><i
                                                className="fab fa-instagram"></i></Link>

                                            <Link target="_blank" to="https://www.facebook.com/akhiazad.jnu/"><i
                                                className="fab fa-facebook-square"></i></Link>

                                            <Link target="_blank" to="https://www.linkedin.com/in/ayesha-siddqua-9686221a0/">
                                                <i className="fab fa-twitter-square"></i></Link>

                                            <Link target="_blank" to="https://www.youtube.com/"><i className="fab fa-youtube"></i></Link>
                                        </Router>
                                    </p>
                                </div>
                                <div>
                                    <h5>Call Us</h5>
                                    <h6>+9 9 55 2200 4622</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">About</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">Lessons</li>
                                    <li className="footer-menu">Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h2>Contact Form</h2>
                                <input
                                    className="footer-input mb-3"
                                    type="text"
                                    placeholder="Enter Name"
                                /> <br />
                                <input
                                    className="footer-input"
                                    type="email"
                                    placeholder="Enter Email"
                                />
                                <br />
                                <Button className="m-4" variant="danger">Send</Button>

                                <div className="phone d-flex align-items-center justify-content-center mt-4">


                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div>
                                        <p>
                                            Lane-02, Block-B, Section-06
                                            <br />Mirpur, Dhaka-1216, Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p className="text-center mt-4"><b>
                        Copyright © 2021 MedCity | Developed by <span className="text-danger">Ayesha Siddiqua</span>
                    </b></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
