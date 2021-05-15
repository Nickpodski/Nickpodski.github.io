import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const handleSelect = (e) => {
    const linkOne = document.getElementById("1");
    const linkTwo =  document.getElementById("2");
    const linkThree =  document.getElementById("3");
    const key = e.target.id;
    switch (key) {
      case '1':
        linkTwo.classList.remove("active");
        linkThree.classList.remove("active");
        linkOne.classList.add("active");
        break;
      case '2':
        linkOne.classList.remove("active");
        linkThree.classList.remove("active");
        linkTwo.classList.add("active");
        break;
      case '3':
        linkOne.classList.remove("active");
        linkTwo.classList.remove("active");
        linkThree.classList.add("active");
        break;
      default:
        break;
    }
  }

  return(
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>Nick Podniestrzanski</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item><Link id="1" onClick={handleSelect} to="/home" className="nav-link active" >About Me</Link></Nav.Item>
          <Nav.Item><Link id="2" onClick={handleSelect} to="/portfolio" className="nav-link" >Portfolio</Link></Nav.Item>
          <Nav.Item><Link id="3" onClick={handleSelect} to="/contact" className="nav-link">Contact</Link></Nav.Item>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavBar;
