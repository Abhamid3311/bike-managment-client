import React from 'react';
import useBikes from '../../hooks/useBikes';

const BikeDetails = () => {
    const [bikes, setBikes] = useBikes();
    const { id, name, img, manufecturer, price, Description } = bikes;
    return (
        <div>
            <h2>BikeDetails: {bikes.length}</h2>
            
        </div>
    );
};

export default BikeDetails;