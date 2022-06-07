import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './BikeDetails.css';

const BikeDetails = () => {
    let { id } = useParams();
    const [bike, setBike] = useState({});
    const navigate = useNavigate();
    const manageInventories = () => {
        navigate('/allinventory');
    };


    useEffect(() => {
        const url = `https://secure-atoll-72404.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBike(data));
    }, []);

    //Handle Delivered Button
    const handleDeliveredBtn = () => {
        const updateBike = { ...bike, quantity: bike.quantity - 1 };
        setBike(updateBike);

        //send to Server
        const url = `https://secure-atoll-72404.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBike)
        })
            .then(res => res.json())
            .then(result => {
                console.log('success', result);
            });
    };

    //Handle ReStock Form
    const handleReStock = (event) => {
        event.preventDefault();
        const newQuantity = + event.target.quantity.value;
        const updateBike = { ...bike, quantity: bike.quantity + newQuantity };
        setBike(updateBike);
        fetch(`https://secure-atoll-72404.herokuapp.com/inventory/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateBike),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                toast.success('Stock added Successfully')
                event.target.reset();
            });
    };



    return (
        <div className='bikeDetails-cntainer w-50 mx-auto'>
            <div>
                <h2>Details of {bike.name}</h2>
                <div className='text-center bikeDetails-card'>
                    <img src={bike.img} width='300px' alt="" />
                    <div className='text-start'>
                        <h3>Manufectirer: {bike.manufecturer}</h3>
                        <h4 className='text-danger'>Price: {bike.price} BDT</h4>
                        <p>Quantity: {bike.quantity}</p>
                        <p>{bike.Description}</p>

                        <div className='d-flex justify-content-between align-items-center'>
                            <button onClick={() => handleDeliveredBtn(id)} className='btn btn-danger' disabled={bike.quantity <= 0}>Delivered</button>

                            <form onSubmit={handleReStock} className='d-flex align-items-center'>
                                <input type="number" name="quantity" id="" />
                                <input className='btn btn-success' type="submit" value="Re-Stock" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <button className='btn btn-lg btn-primary mt-5' onClick={manageInventories}>Manage Inventories</button>
        </div>
    );
};

export default BikeDetails;