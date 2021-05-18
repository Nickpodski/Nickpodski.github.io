import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>Nick Podniestrzanski</Navbar.Brand>
        <Nav className="ml-auto" defaultActiveKey="1">
          <Nav.Item><Nav.Link eventKey="1" as={Link} to="/react_profile_np/home">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="2" as={Link} to="/react_profile_np/portfolio">Portfolio</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="3" as={Link} to="/react_profile_np/contact">Contact</Nav.Link></Nav.Item>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavBar;
