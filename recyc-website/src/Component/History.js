import React from 'react';
import '../CSS/History.css';
import { Link, NavLink } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Nav, Form, FormControl, Container, Row, Col, Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function History() {

     return (
      <Container className="background" fluid={true}>
        <Card.Body className="title text-center">HISTORY</Card.Body>
        <Card id="cardBody">
          <h1 className="header">BIKES FOR ALL, ESPECIALLY FOR KIDS</h1>
          <p className="main">The ReCYCLEry NC was founded in 2000 by Rich Giorgi, inspired by the Recycle Ithaca’s Bikes (RIBS) program in Ithaca, New York. 
          Since it’s foundation, the ReCYCLEry has made providing bicycles to kids in the Carrboro / Chapel Hill community part of its core vision. 
          Likewise, the ReCYCLEry believed providing kids the skills needed to maintain their own bicycles was also central to its mission
          of teaching independence, community interdependence, and self-confidence. This humble idea was brought to life by the dedication,
          passion, and vision of the founding members: Rich Giogi, Rob Noti, Seth Elliot, Todd Hindmarsh, and Andrea Rosenberg.</p>
          <p className="main">In 2000, when the ReCYCLEry NC was founded, we set our sights on providing repaired recycled bicycles and hands-on lessons
          in bicycle repair to children. We aimed to foster independence, self-confidence and responsibility in the youth we served. 
          And at the same time, build community engagement with the cycling community and like-minded adults across Carrboro,
          Chapel Hill, and the surrounding areas.</p>
          <p className="main">Over time, we have expanded our focus beyond kids, sharing our love of bikes and bike repair with the entire community. 
          We are especially proud of our efforts to make our shop, programs and services inclusive for all persons, regardless of 
          race, gender, age, religious affiliation, sexual orientation or ability to offer financial support of any kind.
          </p>
          <h1 className="header second">PRINCIPLES OF INCLUSIVITY</h1>
          <p className="main">The ReCYCLEry has been striving to serve and represent all members of the Carrboro / Chapel Hill community since early in 
          Its inception. Formed and operated as an inclusive organization, the ReCYCLEry abides by principles and practices of 
          non-discrimination, anti-harassment, anti-racism and support of all social classes.</p>
          <p className="main">Central to this was a vision that by having inclusive working practices and principles, people from disparate backgrounds
          would have an opportunity to work together side-by-side and would foster an awareness of the common condition of humanity.</p>
          <h1 className="header second">EARLY PROJECTS</h1>
          <p className="main">One of the early projects that the ReCYCLEry is most proud of are the Mobile Repair Days, enabled through collaboration 
with the Orange County Family Resource Center. On these days, volunteers packed up the tools and parts necessary to
 travel to a community for a day of bike repair. The Mobile Repair Days earned the ReCYCLEry a spot in the Indy Weekly’s
“Best of the Triangle” for “The Best Idea on Wheels” category.
          </p>
        </Card>
      </Container>
     );
     
 }

 export default History;