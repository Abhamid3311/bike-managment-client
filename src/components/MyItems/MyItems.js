import React, { useEffect, useState } from 'react';
import useBikes from '../../hooks/useBikes';
import MyItem from '../MyItem/MyItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const email = user?.email;
        const url = `https://secure-atoll-72404.herokuapp.com/myitem/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(result => setMyItems(result))
    }, []);






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
                        const remaining = myItems.filter(bike => bike._id !== id);
                        setMyItems(remaining);
                    }
                })
        };
    };

    return (
        <div>
            <h2 className=' text-success my-5 text-center'>My Items</h2>
            <div className='bikes-container mb-3 text-start'>
                {
                    myItems.map(item => <MyItem
                        key={item._id}
                        item={item}
                        handleDeleteBtn={handleDeleteBtn}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;