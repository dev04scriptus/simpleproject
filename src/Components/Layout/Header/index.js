import { Container } from '@material-ui/core'
import React from 'react'
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HeaderLogo from '../../../images/logo.png'

export default function Header() {
    return (
        <Container>
            <Navbar expand="lg">
                <NavbarBrand href="#home"><img src={HeaderLogo} alt="" /></NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/aboutus">AboutUs</Link></Nav.Link>
                        <Nav.Link><Link to="/ourservice">OurService</Link></Nav.Link>
                        <Nav.Link><Link to="/portfolio">Portfolio</Link></Nav.Link>
                        <Nav.Link><Link to="/careers">Careers</Link></Nav.Link>
                        <Nav.Link><Link to="/ContactUs">ContactUs</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}
