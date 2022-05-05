import React from 'react';
import useBikes from '../../hooks/useBikes';
import Bike from '../Bike/Bike';

const TopSell = () => {
    const [bikes, setBikes] = useBikes()
    return (
        <div>
            <h1 className='text-center text-danger my-5'>Top Sell On This Summer</h1>
            <div className='bikes-container'>
                {
                    bikes.map(bike => <Bike
                        key={bike.id}
                        bike={bike}
                    ></Bike>).slice(7, 10)
                }
            </div>

        </div>
    );
};

export default TopSell;