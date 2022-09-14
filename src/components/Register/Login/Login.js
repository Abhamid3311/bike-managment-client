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
        <div className='form-container mt-5'>
            <div>
                <h2 className='form-titel my-3'>Login</h2>

                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required />
                    </div>

                    <p style={{ color: "red" }}>{error?.message}</p>
                    {
                        loading && <Spinner animation="border" variant="success" />
                    }

                    <input className='form-submit' type="submit" value="Login" />
                </form>


                <p className='create-account-p'>
                    New to Dream Bike? <Link className='form-link' to='/register'>create an account</Link>
                </p>

                <p className='forget-pass-p'>
                    Forget your password? <button onClick={async () => {
                        await sendPasswordResetEmail(email);
                        toast('Check email for reset password');
                    }} className='reset'>Reset password</button>
                </p>

                <ToastContainer />
                <button onClick={handleGoogleSignIn} className='google-signIn-btn'>Continue with Google</button>
            </div>

        </div>
    );
};

export default Login;