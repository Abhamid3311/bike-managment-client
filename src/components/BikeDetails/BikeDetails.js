import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useBikes from '../../hooks/useBikes';
import './BikeDetails.css';

const BikeDetails = () => {
    let { id } = useParams();
    const [bike, setBike] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBike(data));
    }, []);




    return (
        <div className='bikeDetails-cntainer w-50 mx-auto'>
            <h2>Details of {bike.name}</h2>
            <div className='text-center bikeDetails-card'>
                <img src={bike.img} width='300px' alt="" />
                <div className='text-start'>
                    <h3>Manufectirer: {bike.manufecturer}</h3>
                    <h4 className='text-danger'>Price: {bike.price} BDT</h4>
                    <p>Quantity: {bike.quantity}</p>
                    <p>{bike.Description}</p>
                    <button className='btn btn-success'>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default BikeDetails;