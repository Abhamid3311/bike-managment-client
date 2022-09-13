import React from 'react';
import useBikes from '../../hooks/useBikes';
import Bike from '../Bike/Bike';
import bike from '../../images/feature.jpg'

const TopSell = () => {

    return (
        <div className=' my-5  py-5 shadow-lg '>

            <div className='d-flex flex-column flex-lg-row justify-content-between  '>
                <img src={"https://i.ibb.co/5h18sPM/yamaha-r15-v20-price-in-india-removebg-preview.png"} className='w-50 w-sm-100' alt="" />

                <div className='ms-3 flex-grow-1 mt-5'>
                    <h3 className='text-success fs-2'>About <span className='text-danger'>Dream Bike</span> Dealership</h3>

                    <p className='fs-5 fw-3 mt-3'>Everything you need to do build up an amazing dealership with us. we will do rest of all for you.</p>

                    <p>Dream Bike is not only a hub where buyers and sellers can interact, it is also a comprehensive automotive portal with a forum dedicated to all automotive discussions, a blog that keeps the users up to date with the latest happenings in the automotive industry.</p>
                </div>
            </div>


        </div>
    );
};

export default TopSell;