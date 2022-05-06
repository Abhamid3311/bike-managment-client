import React from 'react';
import useBikes from '../../hooks/useBikes';
import AllInventoryBike from '../AllInventoryBike/AllInventoryBike';
import './AllInventory.css';

const AllInventory = () => {
    const [bikes, setBikes] = useBikes();
    return (
        <div>
            <div className='allInventory-container'>
                {
                    bikes.map(bike => <AllInventoryBike
                        key={bike._id}
                        bike={bike}
                    ></AllInventoryBike>)
                }
            </div>
        </div>
    );
};

export default AllInventory;