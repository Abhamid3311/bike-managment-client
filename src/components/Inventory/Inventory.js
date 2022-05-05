import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Inventory.css';

const Inventory = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('bikes.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);
    return (
        <div>
            <h2>Inventory: {bikes.length}</h2>
            <div className='bikes-container'>
                {
                    bikes.map(bike => <Bike
                        key={bike.id}
                        bike={bike}
                    ></Bike>).slice(0, 6)
                }
            </div>

        </div>
    );
};

export default Inventory;