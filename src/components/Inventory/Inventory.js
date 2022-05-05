import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBikes from '../../hooks/useBikes';
import Bike from '../Bike/Bike';
import './Inventory.css';

const Inventory = () => {
    const [bikes, setBikes] = useBikes();
    const navigat = useNavigate();

    const handleUpdateBtn = id => {
        console.log("clicked", id);
        navigat('/bikedetails');
    }
    return (
        <div>
            <h1 className='text-center text-success my-5'>Our Collections</h1>
            <div className='bikes-container'>
                {
                    bikes.map(bike => <Bike
                        key={bike.id}
                        bike={bike}
                        handleUpdateBtn={handleUpdateBtn}
                    ></Bike>).slice(0, 6)
                }
            </div>

        </div>
    );
};

export default Inventory;