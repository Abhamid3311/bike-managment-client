import React from 'react';
import { useForm } from "react-hook-form";
import useBikes from '../../hooks/useBikes';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddInventoryItem = () => {
    const [user] = useAuthState(auth);
    const [bikes, setBikes] = useBikes();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        //send to server
        const url = `https://secure-atoll-72404.herokuapp.com/inventory/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                const newBikes = [...bikes, result];
                setBikes(newBikes);
            })
    };
    return (
        <div className='w-50 mx-auto m-5'>

            <h2 className='text-center '>Add a New Bike</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input required className='mb-3 form-control' value={user?.email} type="email" {...register("email")} disabled />

                <input className='mb-3 form-control' placeholder='enter bike name' {...register("name", { required: true, maxLength: 20 })} />

                <input className='mb-3 form-control' placeholder='enter manufecturer name' {...register("manufecturer", { required: true, maxLength: 20 })} />

                <textarea required className='mb-3 form-control' placeholder='enter bike description' {...register("Description")} />

                <input required className='mb-3 form-control' placeholder='price' type="number" {...register("price")} />

                <input required className='mb-3 form-control' placeholder='quantity' type="number" {...register("quantity")} />

                <input required className='mb-3 form-control' placeholder='Photo URL' type="text" {...register("img")} />


                <input type="submit" value='Add Item' className=' btn btn-success' />
            </form>
        </div>
    );
};

export default AddInventoryItem;