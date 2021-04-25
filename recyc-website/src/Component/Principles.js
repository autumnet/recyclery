import React from 'react';
import '../CSS/Principles.css';
import { Link, NavLink } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Nav, Form, FormControl, Container, Row, Col, Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function Principles() {

     return (
      <Container className="background" fluid={true}>
      <Card.Body className="title text-center">GUIDING PRINCIPLES</Card.Body>
      <Row className="justify-content-md-center">
      <Col xs lg="2">
          <Image src="/handshake.png" width="150" height="auto" className="d-block m-auto"/>
        </Col>
        <Col md="5">
          <div className="text-center m-auto">
            <h1 className="header">TRUST ONE ANOTHER</h1>
            <p className="main">We strive to trust each other in our work and activities;</p>
            <p className="main">this trust is required for harmony in our community.</p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
      <Col md="5">
        <div className="text-center m-auto">
            <h1 className="header">RESPECT ONE ANOTHER</h1>
            <p className="main">We respect each other's differences and individual autonomy.</p>
            <p className="main">We strive for interdependence.</p>
            <p className="main"> Our diversity helps us appreciate our common humanity.</p>  
          </div>
        </Col>
        <Col xs lg="2">
          <Image src="/handshake.png" width="150" height="auto" className="d-block m-auto"/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
      <Col xs lg="2">
          <Image src="/handshake.png" width="150" height="auto" className="d-block m-auto"/>
        </Col>
        <Col md="6">
          <div className="text-center m-auto">
            <h1 className="header">UPLIFT ONE ANOTHER</h1>
            <p className="main">We work to cultivate a positive atmosphere,</p>
            <p className="main">uplifting each one another and celebrating successes.</p>  
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
      <Col md="6">
        <div className="text-center m-auto">
            <h1 className="header">COLLABORATE, DON'T DICTATE</h1>
            <p className="main">We collaboratively engage with one another and with other bicycle</p>
            <p className="main">advocacy and educational organizations within our community.</p>  
          </div>
        </Col>
        <Col xs lg="2">
          <Image src="/handshake.png" width="150" height="auto" className="d-block m-auto"/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
      <Col xs lg="2">
          <Image src="/handshake.png" width="150" height="auto" className="d-block m-auto"/>
        </Col>
        <Col md="6">
          <div className="text-center m-auto">
            <h1 className="header">UPHOLD CONSENT CULTURE</h1>
            <p className="main">Ask permission and get verbal consent before touching people or</p>
            <p className="main">their bikes, when giving advice, and taking photos.</p>
            <p className="main">Politely remind others to ask permission if they forget!</p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
      <Col md="6">
        <div className="text-center m-auto">
            <h1 className="header">DON'T ASSUME, LET PEOPLE SHARE</h1>
            <p className="main">Do not make assumptions about skill level, ability, knowledge,</p>
            <p className="main">gender, race, country of origin, education, or really, anything!</p>
          </div>
        </Col>
        <Col xs lg="2">
          <Image src="/handshake.png" width="150" height="auto" className="d-block m-auto"/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
      <Col xs lg="2">
          <Image src="/handshake.png" width="150" height="auto" className="d-block m-auto"/>
        </Col>
        <Col md="6">
          <div className="text-center m-auto">
            <h1 className="header">AVOID HARMFUL LANGUAGE</h1>
            <p className="main">Words hold power: avoid ableist, ageist, racist and gendered language.</p>
            <p className="main">No policing identities. Get names and pronouns right.</p>  
            <p className="main">Respect cultural identities and heritage.</p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
      <Col md="6">
        <div className="text-center m-auto">
            <h1 className="header">STRIVE FOR ACCOUNTABILITY 
AND ACKNOWLEDGMENT</h1>
            <p className="main">We’re only human!</p>
            <p className="main">We all may hurt each other along the way. Listen when you have harmed.</p>  
            <p className="main">Make amends when appropriate. Speak up if you see something that seems wrong.</p>  
          </div>
        </Col>
        <Col xs lg="2">
          <Image src="/handshake.png" width="150" height="auto" className="d-block m-auto"/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
      <Col xs lg="2">
          <Image src="/handshake.png" width="150" height="auto" className="d-block m-auto"/>
        </Col>
        <Col md="6">
          <div className="text-center m-auto">
            <h1 className="header">NO SHAME</h1>
            <p className="main">We come here from a wide variety of experience levels, financial access,</p>
            <p className="main">educational backgrounds and opportunities.</p>  
            <p className="main">No call-outs.</p>  
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
      <Col md="6">
        <div className="text-center m-auto">
            <h1 className="header">RECOGNIZE WHOLENESS</h1>
            <p className="main">People have inherent worth outside of productivity, work, and volunteerism.</p>
            <p className="main"> As a result, we acknowledge the necessity for rest and self-care.</p>  

          </div>
        </Col>
        <Col xs lg="2">
          <Image src="/handshake.png" width="150" height="auto" className="d-block m-auto"/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
      <Col xs lg="2">
          <Image src="/handshake.png" width="150" height="auto" className="d-block m-auto"/>
        </Col>
        <Col md="6">
          <div className="text-center m-auto">
            <h1 className="header">MAKE SPACE AND STEP BACK</h1>
            <p className="main">We commit to creating and holding intentional space by and for those who</p>
            <p className="main">are not a part of ‘normative’ culture or who commonly experience marginalization.</p>  
            <p className="main"> We exemplify this by proactively including and uplifting voices and participation</p>  
            <p className="main">among those holding BIPOC, LGBTQ+, WTF, indgenous and other often-marginalized identities.</p>  
          </div>
        </Col>
      </Row>
    </Container>
   );

 }

 export default Principles;