import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Bike.css';

const Bike = ({ bike, handleUpdateBtn }) => {
    const { _id, name, img, manufecturer, price, Description, quantity } = bike;
    return (
        <div >
            <Card className='bike-card shadow'>
                <Card.Img variant="top" src={img} className='w-100' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{manufecturer}</Card.Subtitle>
                    <p>Quantity: {quantity}</p>
                    <h5 className='text-danger mt-2'>Price: {price} BDT</h5>
                    <Card.Text>
                        {Description}
                    </Card.Text>

                    <Button onClick={() => handleUpdateBtn(_id)} className='update-btn' variant="success">Update</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Bike;