import React from 'react';
import google from '../../images/google.png';
import github from '../../images/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialPage = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();


    let errorMsg;
    if (error || error1) {
        errorMsg = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-success'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '1px' }} className='w-50 bg-success'></div>
            </div>
            {errorMsg}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '25px' }} className='mx-2' src={google} alt="" />
                    Google Sign In
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-secondary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '25px' }} className='mx-2' src={github} alt="" />
                    GitHub Sign In
                </button>
            </div>

        </div>
    );
};

export default SocialPage;