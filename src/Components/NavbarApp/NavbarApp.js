import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavbarApp.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const NavbarApp = () => {
  return (
    <Navbar className='NavbarContainers' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='title_star'>
          <Link className='linkp' to='/'>
            Star Wars App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='Textos'>
              <Link className='linkto' to='/'><FaHome size={20} /> Inicio</Link>
            </Nav.Link>
            <Nav.Link className='Textos'>
              <Link className='linkto' to='/Personajes'><FaUser size={20} /> Personajes</Link>
            </Nav.Link>
            <Nav.Link className='Textos'>
              <Link className='linkto' to='/Planetas'><FaGlobeAmericas size={20} /> Planetas</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
