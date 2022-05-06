import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        error
    ] = useSignInWithEmailAndPassword(auth);

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = () => {
        navigate('/register');
    }
    return (
        <div className='container w-50 mx-auto mt-5'>

            <h2 className='text-primary text-center'> Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to Genius car? <span className='text-danger' onClick={navigateRegister}>Please register</span></p>


        </div>
    );
};

export default Login;