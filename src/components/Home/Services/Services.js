import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCheckSquare, faUserClock, faTaxi, faStar, faShield } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import './Service.css';

const Services = () => {
    const serviceCard = [
        {
            name: "Flexible Hours",
            details: "As an agency built on creativity, we want you at your best. That's why we work remotely on select days.",
            icon: faUserClock
        },
        {
            name: "Compensation",
            details: " We value the members of our team, and pay competitive wages based on position and experience.",
            icon: faThumbsUp
        },
        {
            name: "Rewards",
            details: " We offer a program that provides incentives to everyone to help grow and maintain a healthy agency.",
            icon: faCheckSquare
        },
        {
            name: "Special Care",
            details: " We offer a program that provides incentives to everyone to help grow and maintain a healthy agency.",
            icon: faStar
        },
        {
            name: "Post Sell Service",
            details: " We offer a program that provides incentives to everyone to help grow and maintain a healthy agency.",
            icon: faShield
        },
        {
            name: "Home Delivery",
            details: " We offer a program that provides incentives to everyone to help grow and maintain a healthy agency.",
            icon: faTaxi
        },
    ];


    return (
        <div >
            <h1 className='text-center text-success py-5'> Reasons <span className='text-danger'>To Stay</span> With Us</h1>
            <div className='service-card-container pb-5'>

                {
                    serviceCard.map(service => <Card border="success bg-dark">
                        <Card.Header className='text-center fs-1 text-success'>
                            <FontAwesomeIcon icon={service.icon} />
                            <Card.Title className='text-danger text-center mt-2'>{service.name}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text >
                                {service.details}
                            </Card.Text>
                        </Card.Body>
                    </Card>)
                }
            </div>
            <img src={"https://i.ibb.co/4R6NCZ1/footer-image-159048975448445.jpg"} alt="" className='img-fluid'/>
        </div>
    );
};

export default Services;