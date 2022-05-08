import React from 'react';
import { useForm } from "react-hook-form";
import useBikes from '../../hooks/useBikes';

const AddInventoryItem = () => {
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
                <input className='mb-3' placeholder='enter bike name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder='enter manufecturer name' {...register("manufecturer", { required: true, maxLength: 20 })} />
                <textarea required className='mb-3' placeholder='enter bike description' {...register("Description")} />
                <input required className='mb-3' placeholder='price' type="number" {...register("price")} />
                <input required className='mb-3' placeholder='quantity' type="number" {...register("quantity")} />
                <input required className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
                <input required className='mb-3' placeholder='enter Email' type="email" {...register("email")} />
                <input type="submit" value='Add Item' className='bg-success text-white' />
            </form>
        </div>
    );
};

export default AddInventoryItem;