import React, { useState } from 'react';
import '../CSS/Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Images/Logo.svg';
import { Button, Navbar, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap'

function Navigation() {

    // const [open, toggleOpen] = useState(false);

    // function handleButtonClick() {
    //     toggleOpen(!open);
    // };
 
    return (
        <Navbar sticky="top" className="navbar" expand="lg" bg="dark">
            <Navbar.Brand href="/">
                <img
                    src="/logo.svg"
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    alt="Recyclery logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navlinks">
                <NavDropdown title="ABOUT US" to="/about">
                    <NavDropdown.Item href="/history" className="main-nav">HISTORY</NavDropdown.Item>
                    <NavDropdown.Item href="/principles" className="main-nav">PRINCIPLES</NavDropdown.Item>
                    <NavDropdown.Item href="/who" className="main-nav">WHO</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="COMMUNITY" to="/community">
                    <NavDropdown.Item href="/news">NEWS</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/support" className="main-nav">SUPPORT US</Nav.Link>
                <Nav.Link href="/blog" className="main-nav">BLOG</Nav.Link>
                <Nav.Link href="/programs" className="main-nav">PROGRAMS</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}


// function Navbar() {

//     const [open, toggleOpen] = useState(false);

//     function handleButtonClick() {
//         toggleOpen(!open);
//     };
 
//     return (
//         <div className="navbar">
//             <div className="navbar-section">
//                 <Link className="logo" to="/">
//                     <img id="logo" src={Logo} alt="logo" />
//                 </Link>
//                 <div className="links">
//                     <Link id="right-border" className="link" to="/">HOME</Link>
//                     <Link id="right-border" className="link" to="/about">ABOUT US</Link>
//                     <Link id="right-border" className="link" to="/community">COMMUNITY</Link>
//                     <Link id="right-border" className="link" to="/support">SUPPORT US</Link>
//                     <Link id="right-border" className="link" to="/blog">BLOG</Link>
//                     <Link className="link" to="/programs">PROGRAMS</Link>
//                     <div className="mobile" onClick={handleButtonClick}>
//                         <i className={open ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'}></i>
//                     </div>
//                 </div>
//                 <ul className={open ? 'nav-menu active' : 'nav-menu'}>
//                     <a className="mobile-link" href="/">
//                         Home
//                 </a>
//                     <a className="mobile-link" href="/about">
//                         About Us
//                 </a>
//                     <a className="mobile-link" href="/community">
//                         Community
//                 </a>
//                     <a className="mobile-link" href="/support">
//                         Support Us
//                 </a>
//                     <a className="mobile-link" href="/blog">
//                         Blog
//                 </a>
//                     <a className="mobile-link" href="/programs">
//                         Programs
//                 </a>
//                 </ul>

//             </div>

//         </div>
//     )
// }

export default Navigation;

