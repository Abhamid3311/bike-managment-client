import React from 'react';
import useBikes from '../../hooks/useBikes';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [bikes, setBikes] = useBikes();
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
        <div>
            <h2 className=' text-success my-5 text-center'>My Items</h2>
            <div className='bikes-container mb-3 text-start'>
                {
                    bikes.map(bike => <MyItem
                        key={bike._id}
                        bike={bike}
                        handleDeleteBtn={handleDeleteBtn}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;