import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCheckSquare, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import './Service.css';

const Services = () => {
    return (
        <div>
            <h1 className='text-center text-success my-5'> Reasons to stay with us</h1>
            <div className='service-card-container my-5'>
                <Card border="success ">
                    <Card.Header className='text-center fs-1 text-primary'>
                        <FontAwesomeIcon icon={faUserClock} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className='text-danger text-center'>Flexible Hours</Card.Title>
                        <Card.Text >
                            As an agency built on creativity, we want you at your best. That's why we work remotely on select days.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card border="success" >
                    <Card.Header className='text-center fs-1 text-warning '>
                        <FontAwesomeIcon icon={faCheckSquare} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className='text-danger text-center'>Compensation</Card.Title>
                        <Card.Text>
                            We value the members of our team, and pay competitive wages based on position and experience.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="success" >
                    <Card.Header className='text-center fs-1 text-info'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className='text-danger text-center'>Rewards</Card.Title>
                        <Card.Text>
                            We offer a program that provides incentives to everyone to help grow and maintain a healthy agency.
                        </Card.Text>
                    </Card.Body>
                </Card>


            </div>
        </div>
    );
};

export default Services;