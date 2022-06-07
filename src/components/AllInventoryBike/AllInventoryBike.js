import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './AllInventoryBike.css';

const AllInventoryBike = ({ bike, handleDeleteBtn, index }) => {
    const navigation = useNavigate();
    const { _id, name, img, manufecturer, price, Description, quantity } = bike;
    const handleUpdate = id => {
        console.log("clicked", id);
        navigation(`/inventory/${id}`)
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td><img src={img} style={{ width: "80px" }} alt="" /></td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td><button onClick={() => handleUpdate(_id)} className='btn btn-success btn-sm'>Update</button></td>
            <td><button onClick={() => handleDeleteBtn(_id)} className='btn btn-danger btn-sm'>Delete</button></td>
        </tr>

    )
}

export default AllInventoryBike;