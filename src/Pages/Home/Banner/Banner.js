import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'

import sliderIcon1 from '../../../images/bannerIcon/icon1.png'
import sliderIcon2 from '../../../images/bannerIcon/icon2.png'
import sliderIcon3 from '../../../images/bannerIcon/icon3.png'



const Banner = () => {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-6">
                                <h1 className='carousel-title'>Providing Best Medical Care</h1>
                                <p className='carousel-p p-4'>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for clinniless</p>
                                <div className="row">
                                    <div className="col-lg-3 slider-icon rounded-circle me-4">
                                        <img src={sliderIcon1} alt="" />
                                    </div>
                                    <div className="col-lg-3 slider-icon rounded-circle me-4">
                                        <img src={sliderIcon2} alt="" />
                                    </div>
                                    <div className="col-lg-3 slider-icon rounded-circle me-4">
                                        <img src={sliderIcon3} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="row">
                            <div className="col-lg-6  col-sm-6 col-6">
                                <h1 className='carousel-title'>All Aspects of Medical Practise</h1>
                                <p className='carousel-p p-4'>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for clinniless</p>
                                <div className="row">
                                    <div className="col-lg-3 slider-icon rounded-circle me-4">
                                        <img src={sliderIcon1} alt="" />
                                    </div>
                                    <div className="col-lg-3 slider-icon rounded-circle me-4">
                                        <img src={sliderIcon2} alt="" />
                                    </div>
                                    <div className="col-lg-3 slider-icon rounded-circle me-4">
                                        <img src={sliderIcon3} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="row">
                            <div className="col-lg-6  col-sm-6 col-6">
                                <h1 className='carousel-title'>Care Whenever You Need It</h1>
                                <p className='carousel-p p-4'>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for clinniless</p>
                                <div className="row">
                                    <div className="col-lg-3 slider-icon rounded-circle me-4">
                                        <img src={sliderIcon1} alt="" />

                                    </div>

                                    <div className="col-lg-3 slider-icon rounded-circle me-4">
                                        <img src={sliderIcon2} alt="" />
                                    </div>
                                    <div className="col-lg-3 slider-icon rounded-circle me-4">
                                        <img src={sliderIcon3} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;