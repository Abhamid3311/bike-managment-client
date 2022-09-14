import React from 'react';
import useBikes from '../../../hooks/useBikes';
import AllInventoryBike from '../../AllInventoryBike/AllInventoryBike';
import './AllInventory.css';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AllInventory = () => {
    const [bikes, setBikes] = useBikes();
    const navigation = useNavigate();

    const handleAddItem = () => {
        navigation('/additem');
    };

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
                        toast.error('Deleted Successfully');
                    }
                })
        };
    };
    return (
        <div className='text-center'>
            <div className='allInventory-container'>


                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Bike</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bikes.map((bike, index) => <AllInventoryBike
                                key={bike._id}
                                bike={bike}
                                handleDeleteBtn={handleDeleteBtn}
                                index={index}
                            >
                            </AllInventoryBike>)
                        }

                    </tbody>
                </Table>
            </div>
            <button className='btn-primary btn btn-lg ' onClick={handleAddItem}>Add New Bike</button>

            <img src={"https://i.ibb.co/gZjptVv/suzuki-motul-engine-oil.jpg"} alt="" srcset="" className='img-fluid my-4' />
        </div>
    );
};

export default AllInventory;