import React from 'react';
//import ReactDOM from 'react-dom';
import '../CSS/Mechanic.css';
//import Carousel from 'react-bootstrap/Carousel'
import { Link, NavLink } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Nav, Form, FormControl, Container, Row, Col, Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function Mechanic() {

    return (
      <Container className="background" fluid={true}>
      <Card.Body className="title text-center">MECHANIC CLASSES</Card.Body>
      <Card id="cardBody">
      <h1 className="header">Sorry, due to COVID-19, we are not holding mechanic classes for the public at this time.</h1>
      <h2 className="text-center">Instead, check out these bicycle repair resources!</h2>
        <Card id="mechanic-resources">
          <Card.Header as="h5">General Bicycle Repair Resources:</Card.Header>
          <Card.Body>
            <div>
            https://www.madegood.com/bikes/
            https://www.youtube.com/watch?v=ZQpSmi0eFDw
            https://www.bikeride.com/guide/
            https://www.reviewgeek.com/37523/the-4-excellent-youtube-channels-to-learn-bicycle-repair-from/   
            </div>
          </Card.Body>
        </Card>
        <Card id="mechanic-resources">
          <Card.Header as="h5">Videos on repairing specific parts:</Card.Header>
          <Card.Body>
          <div>Diagram of bike part names</div>
            <div>Shifting
            How to adjust a rear derailleur (limit screws and indexing)
            How to adjust a front derailleur
            Front derailleur - advanced troubleshooting
            Rear derailleur - advanced troubleshooting</div>
            <div>Brakes
            How to install and adjust linear pull and V-brake calipers
            How to install and adjust dual pivot brake calipers, as well as dual symmetric brake calipers
            How to replace brake pads - rim brakes</div>
            <div>Chain
            chain replacement 
            Saddle + seat-post
            how to install and adjust a new bicycle saddle</div>
            <div>Bottom Brackets, Cranksets, + Pedals
            Removal and installation of bottom brackets used in threaded shells, including three-piece cranks, threaded "thru-spindle" external bearing cups, and bottom brackets used in T47 shells
            Removal, overhaul, installation and adjustment of adjustable cup-and-cone bottom brackets
            Installing and removing the crankset on your bicycle
            Replacing bike pedals</div>
            <div>Wheels
            Removing and installing a tire and tube on a bicycle rim
            Removing and reinstalling a wheel on your bike</div>
            <div>Wheel truing
            Determining cassette/freewheel type and tool
            Freewheel removal and installation
            Cassette removal and installation</div>
            <div>Headsets
            Removing and installing a threadless stem from a bicycle</div>
          </Card.Body>
        </Card>
      </Card>
    </Container>
      ); 
        
}

export default Mechanic;