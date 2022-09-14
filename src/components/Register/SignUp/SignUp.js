import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);



    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    };


    if (user || gUser) {
        navigate(from, { replace: true });
    };

    //Create User
    const handleCreateUsers = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('your two password did not match!');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 charecters or longer');
            return;
        }
        console.log(email, password);
        createUserWithEmailAndPassword(email, password);
        navigate('/');
    };

    //Google SignIn
    const handleGoogleSignIn = e => {
        e.preventDefault();
        signInWithGoogle(email, password)
    };

    return (
        <div className='bg-dark py-3'>
            <div className='form-container shadow-lg'>
                <div>
                    <h2 className='text-center fw-bold fs-1 text-success py-5'>Sign Up</h2>

                    <form onSubmit={handleCreateUsers}>
                        <div class="form-floating mb-3">
                            <input
                                type="email"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                onBlur={handleEmailBlur} required />
                            <label for="floatingInput">Email address</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                onBlur={handlePasswordBlur} required />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="form-floating">
                            <input
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                onBlur={handleConfirmPasswordBlur} required />
                            <label for="floatingPassword">Confirm Password</label>
                        </div>
                        <p className='text-danger'>{error}</p>

                        <button class="btn btn-primary btn-lg w-100" type="submit">Sign Up</button>
                    </form>


                    <p className=' text-start'>
                        Already have an account? <Link className='text-danger' to='/login'>Login</Link>
                    </p>

                    <button onClick={handleGoogleSignIn} className='google-signIn-btn btn-success'>Continue with Google</button>
                </div>

            </div>
        </div>


    );
};

export default Register;