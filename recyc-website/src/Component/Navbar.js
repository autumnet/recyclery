import React, { useState } from 'react';
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../Images/Logo.svg';

function Navbar() {

    const [open, toggleOpen] = useState(false);

    function handleButtonClick() {
        toggleOpen(!open);
    };
 
    return (
        <div className="navbar">
            <div className="navbar-section">
                <Link className="logo" to="/">
                    <img id="logo" src={Logo} alt="logo" />
                </Link>
                <div className="links">
                    <Link id="right-border" className="link" to="/">Home</Link>
                    <Link id="right-border" className="link" to="/about">About Us</Link>
                    <Link id="right-border" className="link" to="/community">Community</Link>
                    <Link id="right-border" className="link" to="/support">Support Us</Link>
                    <Link id="right-border" className="link" to="/blog">Blog</Link>
                    <Link className="link" to="/programs">Programs</Link>
                    <div className="mobile" onClick={handleButtonClick}>
                        <i className={open ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'}></i>
                    </div>
                </div>
                <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                    <a className="mobile-link" href="/">
                        Home
                </a>
                    <a className="mobile-link" href="/about">
                        About Us
                </a>
                    <a className="mobile-link" href="/community">
                        Community
                </a>
                    <a className="mobile-link" href="/support">
                        Support Us
                </a>
                    <a className="mobile-link" href="/blog">
                        Blog
                </a>
                    <a className="mobile-link" href="/programs">
                        Programs
                </a>
                </ul>

            </div>

        </div>
    )
}

export default Navbar;

