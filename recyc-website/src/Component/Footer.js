import React from 'react'
import '../CSS/Footer.css';
import { Link } from 'react-router-dom';
import Email from '../Images/Email.png'; 

function Footer() {
    return (
        <div className="footer">
            <div>
                <p>Copyright &#169; 2021 Recyclery</p>
                <p style={{fontSize: ".9rem"}}>UNC Web Development</p>
            </div>

            <Link to="/Contact">
                <img id="Email" src={Email} alt="Email" />
            </Link>


        </div>
    )
}
export default Footer;