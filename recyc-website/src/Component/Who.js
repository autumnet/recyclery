import React from 'react';
import '../CSS/Who.css';
import { Link, NavLink } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Nav, Form, FormControl, Container, Row, Col, Image, CardDeck } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function Who() {

     return (
      <Card style={{ borderStyle: 'none'}} fluid={true}>
        <Card.Body className="title text-center">WHO WE ARE</Card.Body>
      <Accordion defaultActiveKey="0" className="accordion" id="cardHeader">
        <Card id="cardBody">
          <Accordion.Toggle as={Card.Header} eventKey="0" className="cardHead">
            BOARD MEMBERS
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
          <Card.Body>
            <CardDeck>
              <Card id="profile">
              <Image src="/recyccirclelogo.png" width="250" height="auto" roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card id="profile">
                <Image src="/recyccirclelogo.png" width="250" height="auto" roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card id="profile">
                <Image src="/recyccirclelogo.png" width="250" height="auto" roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card id="cardBody">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            ORGANIZERS
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
            <CardDeck>
              <Card id="profile">
              <Image src="/recyccirclelogo.png" width="250" height="auto" roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card id="profile">
              <Image src="/recyccirclelogo.png" width="250" height="auto" roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card id="profile">
              <Image src="/recyccirclelogo.png" width="250" height="auto" roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card id="cardBody">
          <Accordion.Toggle as={Card.Header} eventKey="2">
            VOLUNTEERS
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
          <Card.Body>
            <CardDeck>
              <Card id="profile">
              <Image src="/recyccirclelogo.png" width="250" height="auto" roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card id="profile">
              <Image src="/recyccirclelogo.png" width="250" height="auto" roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card id="profile">
              <Image src="/recyccirclelogo.png" width="250" height="auto" roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card id="cardBody">
          <Accordion.Toggle as={Card.Header} eventKey="3">
            SUPPORTERS
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
          <Card.Body>
            <CardDeck>
              <Card id="profile">
              <Image src="/recyccirclelogo.png" width="250" height="auto" roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card id="profile">
              <Image src="/recyccirclelogo.png" width="250" height="auto" roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card id="profile">
              <Image src="/recyccirclelogo.png" width="250" height="auto" roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </Card>
     );

 }

 export default Who;