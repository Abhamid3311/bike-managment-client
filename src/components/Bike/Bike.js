import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Bike.css';

const Bike = ({ bike, handleUpdateBtn }) => {
    const { _id, name, img, manufecturer, price, Description, quantity } = bike;
    return (
        <div >
            <Card className='bike-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{manufecturer}</Card.Subtitle>
                    <Card.Text>
                        {Description}
                        <h5 className='text-danger mt-2'>Price: {price} BDT</h5>
                        <p>Quantity: {quantity}</p>
                    </Card.Text>

                    <Button onClick={() => handleUpdateBtn(_id)} className='update-btn' variant="success">Update</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Bike;