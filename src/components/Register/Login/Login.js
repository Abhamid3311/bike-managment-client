import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    // get value from inputField
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    };


    if (user || gUser) {
        navigate(from, { replace: true });
    }

    // Handle SignIn 

    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const handleGoogleSignIn = e => {
        e.preventDefault();
        signInWithGoogle(email, password)
    }

    return (
        <div className='bg-dark py-3'>
            <div className='form-container shadow-lg'>
                <div>
                    <h2 className='text-center fw-bold fs-1 text-primary py-5'>Login</h2>
                    <form onSubmit={handleUserSignIn}>

                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="email"
                                onBlur={handleEmailBlur} required />
                            <label for="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                onBlur={handlePasswordBlur} required />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <p style={{ color: "red" }}>{error?.message}</p>
                        {
                            loading && <Spinner animation="border" variant="success" />
                        }

                        <button className="btn btn-primary btn-lg w-100" type="submit">Login</button>
                    </form>


                    <p className='mt-3 text-start'>
                        New to Dream Bike? <Link className='text-danger' to='/register'>create an account</Link>
                    </p>

                    <p>Forget your password?
                        <button onClick={async () => {
                            await sendPasswordResetEmail(email);
                            toast('Check email for reset password');
                        }} className='btn btn-light'>Reset password
                        </button>
                    </p>

                    <button onClick={handleGoogleSignIn} className='google-signIn-btn btn-primary'>Continue with Google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;