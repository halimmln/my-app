import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

const Navigation = (props) => {
  console.log(props);
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">UserList</Nav.Link>
          <Nav.Link href="/user">AddUser</Nav.Link>
          <Nav.Link href="/userForm">Formik form</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

