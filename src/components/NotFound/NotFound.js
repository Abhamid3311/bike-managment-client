import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    const goToHomepage = () => {
        navigate('/');
    }
    return (
        <div className='d-flex align-items-center justify-content-center my-5'>
            <div>
                <h1 className='oops text-danger'>Oops!</h1>
                <h4 className='text-primary fs-3'>404- Page Not Found</h4>
                <p>The Page you are looking for might have been removed or temporary unavailable</p>
                <button onClick={goToHomepage} className='btn btn-success btn-lg'>Go HomePage</button>
            </div>
        </div>
    );
};

export default NotFound;