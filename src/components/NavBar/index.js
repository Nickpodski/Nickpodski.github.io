import React from "react";
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return(
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand as={Link} to="/home">Nick Podniestrzanski</Navbar.Brand>
        <NavDropdown className="ml-auto" title="Menu" id="collasible-nav-dropdown">
          <NavDropdown.Item as={Link} to="/home">Home</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/portfolio">Portfolio</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </>
  )
}

export default NavBar;
