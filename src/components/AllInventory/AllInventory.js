import React from 'react';
import useBikes from '../../hooks/useBikes';
import AllInventoryBike from '../AllInventoryBike/AllInventoryBike';
import './AllInventory.css';
import { useNavigate } from 'react-router-dom';

const AllInventory = () => {
    const [bikes, setBikes] = useBikes();
    const navigation = useNavigate()

    const handleAddItem = () => {
        navigation('/additem');
    }
    return (
        <div>
            <div className='allInventory-container'>
                {
                    bikes.map(bike => <AllInventoryBike
                        key={bike._id}
                        bike={bike}
                        handleAddItem={handleAddItem}
                    ></AllInventoryBike>)
                }
            </div>
        </div>
    );
};

export default AllInventory;