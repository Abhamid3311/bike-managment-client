import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Bike.css';
import '../Home/Banner/Banner.css'

const Bike = ({ bike, handleUpdateBtn }) => {
    const { _id, name, img, manufecturer, price, Description, quantity } = bike;
    return (
        <div >
            <Card className='bike-card shadow-lg bg-dark text-white'>
                <Card.Img variant="top" src={img} className='w-100' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="text-muted">{manufecturer}</Card.Subtitle>
                    <p>Quantity: {quantity}</p>
                    <h5 className='text-danger'>Price: {price} BDT</h5>
                    <Card.Text>
                        {Description.slice(0, 150)}
                    </Card.Text>

                    <Button onClick={() => handleUpdateBtn(_id)} className='update-btn' variant="primary">Update</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Bike;