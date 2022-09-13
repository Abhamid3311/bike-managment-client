import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBikes from '../../hooks/useBikes';
import Bike from '../Bike/Bike';
import './Inventory.css';

const Inventory = () => {
    const [bikes, setBikes] = useBikes();
    const navigat = useNavigate();



    const handleUpdateBtn = id => {
        navigat(`/inventory/${id}`);
    }
    const handleAllBike = () => {
        navigat('/allinventory')
    }
    return (
        <div className='text-center bg-dark py-5'>
            <h1 className=' text-success my-5'>Our <span className='text-danger'>Collections</span></h1>

            <div className='bikes-container mb-3 text-start'>
                {
                    bikes.map(bike => <Bike
                        key={bike._id}
                        bike={bike}
                        handleUpdateBtn={handleUpdateBtn}
                    ></Bike>).slice(0, 6)
                }

            </div>
            <button className='btn btn-lg btn-success ' onClick={handleAllBike}>Manage Inventories</button>

        </div>
    );
};

export default Inventory;