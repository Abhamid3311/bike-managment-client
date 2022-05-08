import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllInventoryBike.css';

const AllInventoryBike = ({ bike, handleDeleteBtn }) => {
    const navigation = useNavigate();
    const { _id, name, img, manufecturer, price, Description, quantity } = bike;
    const handleUpdate = id => {
        console.log("clicked", id);
        navigation(`/inventory/${id}`)
    }
    return (
        <div className='w-50 mx-auto '>
            <div className='d-flex  my-3 inventory-card'>
                <img className='me-5' src={img} width='55px' alt="" />
                <h5 className='me-5 text-primary'>{name}</h5>
                <p className='mx-2 text-danger'>Quantity: {quantity}</p>
                <button className='ms-auto ' onClick={() => handleUpdate(_id)}>Update</button>
                <button onClick={() => handleDeleteBtn(_id)} className='ms-auto'>X</button>

            </div>

        </div>
    );
};

export default AllInventoryBike;