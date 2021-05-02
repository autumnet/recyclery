import React, { useState } from 'react';
import '../CSS/Navbar.css';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Nav} from 'react-bootstrap'

function Navigation() {

    const [open, toggleOpen] = useState(false);

    function handleButtonClick() {
        toggleOpen(!open);
    };
 
    return (
        <Navbar sticky="top" className="navbar" expand="lg" className="ml-auto">
            <Navbar.Brand href="/">
                <img
                    src="/recyclogotransparent.png"
                    width="100"
                    height="auto"
                    className="d-inline-block align-top"
                    alt="Recyclery logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navlinks ml-auto">
                <NavDropdown title="ABOUT US" to="/about" id="navDropdown">
                    <NavDropdown.Item href="/history" className="main-nav dropdown-link">HISTORY</NavDropdown.Item>
                    <NavDropdown.Item href="/principles" className="main-nav dropdown-link">PRINCIPLES</NavDropdown.Item>
                    <NavDropdown.Item href="/who" className="main-nav dropdown-link">WHO WE ARE</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="COMMUNITY" to="/community" id="navDropdown">
                    <NavDropdown.Item href="/bikeportraits" className="main-nav dropdown-link">BIKE PORTRAITS</NavDropdown.Item>
                    <NavDropdown.Item href="/news" className="main-nav dropdown-link">NEWS</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/support" className="main-nav"><span className="navLink">SUPPORT US</span></Nav.Link>
                <Nav.Link href="/blog" className="main-nav"><span className="navLink">BLOG</span></Nav.Link>
                <NavDropdown title="PROGRAMS" to="/about" id="navDropdown">
                    <NavDropdown.Item href="/wtf" className="main-nav dropdown-link">WTF</NavDropdown.Item>
                    <NavDropdown.Item href="/mechanic" className="main-nav dropdown-link">MECHANIC CLASSES</NavDropdown.Item>
                    <NavDropdown.Item href="/rides" className="main-nav dropdown-link">RIDES</NavDropdown.Item>
                    <NavDropdown.Item href="/run" className="main-nav dropdown-link">RUN STUFF</NavDropdown.Item>
                </NavDropdown>                
                <Button variant="outline-light" id="navbutton" href="https://docs.google.com/forms/d/e/1FAIpQLSeAU4vdU0F47gsuV67wAj2_zNmma2HJPebnBcDnjPFRGMGqGQ/viewform">SERVICE REQUEST</Button>
                <div className="mobile" onClick={handleButtonClick}>
                        <i className={open ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'}></i>
                </div>
                <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                    <a className="mobile-link" href="/">
                        Home
                </a>
                    <a className="mobile-link" href="/">
                        About Us
                </a>
                    <a className="mobile-link" href="/">
                        About Homelessness
                </a>
                    <a className="mobile-link" href="/">
                        Testimonials
                </a>
                    <a className="mobile-link" href="/">
                        Contact
                </a>
                </ul>
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

export default withRouter(Navigation);

