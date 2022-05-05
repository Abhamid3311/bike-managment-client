import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap';
import './Service.css';

const Services = () => {
    return (
        <div>
            <h1 className='text-center text-success my-5'> Services</h1>
            <div className='service-card-container my-5'>
                <Card border="success ">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Info Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="success" >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Info Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="success" >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Info Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>


            </div>
        </div>
    );
};

export default Services;