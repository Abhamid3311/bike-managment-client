import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/nc0mBF9/bike-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Black Suzuki </h3>
                    <p>Black Raching bike. bike of speed bike of power</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/xmg4wCN/bike-2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className='text-danger'>Harley Davison</h3>
                    <p>Bike of Luxarious and Bike of royality</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Wvg1kbg/bike-3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className='text-success'>Green Zixxers</h3>
                    <p>Bike of freshness and speed</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;