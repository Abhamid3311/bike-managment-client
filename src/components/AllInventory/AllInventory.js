import React from 'react';
import useBikes from '../../hooks/useBikes';
import AllInventoryBike from '../AllInventoryBike/AllInventoryBike';
import './AllInventory.css';
import { useNavigate } from 'react-router-dom';

const AllInventory = () => {
    const [bikes, setBikes] = useBikes();
    const navigation = useNavigate();

    const handleAddItem = () => {
        navigation('/additem');
    };

    const handleDeleteBtn = id => {
        const procced = window.confirm('You want to delete?');
        if (procced) {
            const url = `https://secure-atoll-72404.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        console.log('data deleted');
                        const remaining = bikes.filter(bike => bike._id !== id);
                        setBikes(remaining);
                    }
                })
        };
    };
    return (
        <div className='text-center'>
            <div className='allInventory-container'>
                {
                    bikes.map(bike => <AllInventoryBike
                        key={bike._id}
                        bike={bike}
                        handleDeleteBtn={handleDeleteBtn}
                    ></AllInventoryBike>)
                }
            </div>
            <button className='btn-primary btn btn-lg' onClick={handleAddItem}>Add New Bike</button>
        </div>
    );
};

export default AllInventory;