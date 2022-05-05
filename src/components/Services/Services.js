import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div>
            <h1 className='text-center text-primary my-5'> services</h1>
            <div className='service-card'>

                <FontAwesomeIcon icon={faCoffee} size='lg' />

            </div>
        </div>
    );
};

export default Services;