import React from 'react';
//import ReactDOM from 'react-dom';
import '../CSS/Wtf.css';
import { Link, NavLink } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Nav, Form, FormControl, Container, Row, Col, Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function Wtf() {

    return (
        <Container className="background" fluid={true}>
          <Card.Body className="title text-center">WTF</Card.Body>
          <Card id="cardBody">
            <h1 className="header">Supporting Gender Diversity in the Bike Community</h1>
            <p className="main">WTF Mechanic Nights are hosted at the ReCYCLEry Wednesday evenings 5-8pm. The shop is open to women, trans, femme, non-binary (NB), and gender non conforming (GNC) identifying persons.</p>
            <p className="main">At the WTF Mechanic Night you can come and pick out a donated bike from the back for refurbishing (one of our volunteer mechanics will help guide you through your repairs), bring your own project to work on, or help us refurbish bikes for our other community projects.  We also have DIY tool sets for people who prefer to work independently, as well as a Bike Fix-It Station set up outside the shop for after-hour use.</p>
            <p className="main">Currently, the WTF Mechanic Nights are operating at a low-density capacity and by  appointment on a first-come first-serve basis and contingent on volunteer availability. Masks are required.</p>
            <p className="main">WTF Mechanic Nights are volunteer-run and rely on community support to continue our mission. Please consider supporting our projects though the main ReCYCLEry donation page.</p>
          </Card>
        </Container>
       );
        
}

export default Wtf;
