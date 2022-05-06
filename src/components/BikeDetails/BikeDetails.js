import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBikes from '../../hooks/useBikes';

const BikeDetails = () => {
    const [bikes] = useBikes();
    const [bike, setBike] = useState([]);
    let { _id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBike(data));
    }, [bikes])




    return (
        <div>
            <h2>BikeDetails: {bike.length}</h2>



        </div>
    );
};

export default BikeDetails;