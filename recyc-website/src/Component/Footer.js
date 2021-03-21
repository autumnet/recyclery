import React from 'react'
import '../CSS/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div>
                <p>Copyright &#169; 2021 Recyclery</p>
                <p style={{fontSize: ".9rem"}}>UNC Web Development</p>
            </div>
        </div>
    )
}
export default Footer;