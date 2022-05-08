import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const MyItem = ({ bike, handleDeleteBtn }) => {
    const { _id, name, img, manufecturer, price, Description, quantity, email } = bike;
    return (
        <div>
            <Card className='bike-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{manufecturer}</Card.Subtitle>
                    <Card.Text>
                        {Description}
                        <p className='text-danger mt-0'><strong>Price: {price} BDT</strong></p>
                        <p className='mt-1'>Quantity: {quantity}</p>
                        <p>User Email: {email}</p>
                    </Card.Text>
                    <button onClick={() => handleDeleteBtn(_id)} className='ms-auto btn  btn-danger'>Delete</button>


                </Card.Body>
            </Card>
        </div>
    );
};

export default MyItem;