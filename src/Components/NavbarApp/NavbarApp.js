import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaGlobeAmericas, FaHome, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './NavbarApp.css'

export const NavbarApp = () => {
  return (
    <Navbar className='NavbarContainers' expand='lg'>
      <Container>
        <Navbar.Brand href='#home' className='title_star'>
          <Link className='linkp' to='/'>
            Star Wars App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link className='Textos'>
              <Link className='linkto' to='/'>
                <FaHome size={20} />
                Inicio
              </Link>
            </Nav.Link>
            <Nav.Link className='Textos'>
              <Link className='linkto' to='/Personajes'>
                <FaUser size={20} />
                Personajes
              </Link>
            </Nav.Link>
            <Nav.Link className='Textos'>
              <Link className='linkto' to='/Planetas'>
                <FaGlobeAmericas size={20} />
                Planetas
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
