import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../img/slider-1.webp';
import slider2 from '../../img/Smart-Watch.jpg';
import slider3 from '../../img/phone.jpg';
import './Slider.css';


const Slider = () => {
    return (
        <div>
            <div className='w-100 mb-5 slider'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide" />
                        <Carousel.Caption>
                            <div className='text-black'>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div className='text-black'>
                                <h3>Second slide label</h3>
                                <p>The technology company is, like it or not, a major presence in the watch industry.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className='text-black'>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;