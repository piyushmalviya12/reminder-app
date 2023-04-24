import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from '../context/Firebase';
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';



const LoginPage=()=>{
    const firebase = useFirebase();
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log("Logged in Succesfully");
    const result = await  firebase.signinUserWithEmailAndPassword(email,password);
    console.log(" Succesfully", result);
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
                
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        LogIn
      </Button>

    </Form>
    <h2 className='mt-5 mb-5'>OR</h2>
    <Button onClick={firebase.signinWithGoogle}>Signin with Google</Button>
        </div>
    );
};
export default LoginPage;