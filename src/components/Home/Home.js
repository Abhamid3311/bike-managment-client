import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Services from '../Services/Services';
import TopSell from '../TopSell/TopSell';

const Home = () => {
    return (
        <div className='bg-dark text-white '>
            <Banner></Banner>
            <Inventory></Inventory>
            <TopSell></TopSell>
            <Services></Services>
        </div>
    );
};

export default Home;