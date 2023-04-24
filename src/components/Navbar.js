import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarr () {
  return (
    <>
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/home">Reminder Is Here</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/addreminder">Add Reminder</Nav.Link>
        <Nav.Link href="/loginpage">Log Out</Nav.Link>
        <Nav.Link href="/signuppage">SignUp</Nav.Link>
      </Nav>
    </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;