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
        <div className='form-container mt-5'>
            <div>
                <h2 className='form-titel my-3'>Sign Up</h2>
                <form onSubmit={handleCreateUsers}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input

                        className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='forget-pass-p'>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
                <button onClick={handleGoogleSignIn} className='google-signIn-btn'>Continue with Google</button>
            </div>

        </div>


    );
};

export default Register;