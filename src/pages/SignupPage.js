import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from '../context/Firebase';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const SignupPage=()=>{
    const firebase = useFirebase();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const result = await  firebase.signupUserWithEmailAndPassword(email,password);
    
    };
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
      if(firebase.isLoggedIn){
        // navigate to home ppage
        navigate("/");
      }
    },[firebase, navigate]);


    return(
        <div className='container mt-5'>
            <Form onSubmit={handleSubmit}> 
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        SignUp
      </Button>
    </Form>
        </div>
    );
};
export default SignupPage;