import React from 'react';
import useBikes from '../../hooks/useBikes';
import Bike from '../Bike/Bike';

const AllInventory = () => {
    const [bikes, setBikes] = useBikes();
    return (
        <div>
            <h2>Inventory: {bikes.length}</h2>
            <div className='bikes-container'>
                {
                    bikes.map(bike => <Bike
                        key={bike.id}
                        bike={bike}
                    ></Bike>)
                }
            </div>
        </div>
    );
};

export default AllInventory;