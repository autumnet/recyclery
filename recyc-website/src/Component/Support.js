import React from 'react';
import '../CSS/Support.css';
import { Link, NavLink } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Nav, Tab, Tabs, Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function Support() {

     return (
      <Container className="background" fluid={true}>
        <Card.Body className="s-title text-center">3 WAYS TO SUPPORT</Card.Body>
        <Card id="tabHolder">
          <Tabs defaultActiveKey="profile" fill>
            <Tab eventKey="home" id="tab-buttons" title="VOLUNTEER">
              <div class="support-content">
                <h3 class="support-header">There are many ways to volunteer with us!</h3>
                <p>Become a volunteer bike mechanic (we can teach you!)</p>
                <p>Youth advocacy and programming</p>
                <p>Community outreach and engagement</p>
                <p>Marketing, advertising, and social media</p>
                <p>Organization, documentation and grant writing</p>
              </div>
            </Tab>
            <Tab eventKey="profile" id="tab-buttons" title="DONATIONS">
            <CardDeck>
              <Card className="donationCards">
                <Card.Header>SUSTAINABLE SUPPORT</Card.Header>
                <Card.Img variant="top" src="/recyccirclelogo.png" width="50" height="auto" />
                <Card.Body>
                  <Card.Title>Patreon</Card.Title>
                  <Card.Text>
                      Visit our <a href="https://www.patreon.com/rideyourbike">Patreon page</a> to sustainably support our mission for as little as $3/ month. 
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>ONE-TIME GIFTS</Card.Header>
                <Card.Img variant="top" src="/recyccirclelogo.png" width="50" height="auto" />
                <Card.Body>
                  <Card.Title>Cash Donations</Card.Title>
                  <Card.Text>
                    <p>Support us through one-time gifts anytime via:</p>
                    <p>Venmo: @reCYCLERy-NC</p>
                    <p>Paypal: bikes@recyclery.org</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>INDIRECT SUPPORT</Card.Header>
                <Card.Img variant="top" src="/recyccirclelogo.png" width="50" height="auto" />
                <Card.Body>
                  <Card.Title>Amazon Smile</Card.Title>
                  <Card.Text>
                  <p>Support the ReCYCLEry with your online purchases! Go to <a href="https://smile.amazon.com/">https://smile.amazon.com/</a> and select Recyclery NC as your charity. Then bookmark Amazon Smile and continue your regular shopping to generate donations for the ReCYCLEry.</p>
                  <p>As of August 2020 we have received $1,238 from Amazon Smile. Thank you shoppers!</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
            <CardDeck>
              <Card>
                <Card.Header>IN-KIND DONATIONS</Card.Header>
                <Card.Img variant="top" src="/recyccirclelogo.png" width="50" height="auto" />
                <Card.Body>
                  <Card.Title>Other Items</Card.Title>
                  <Card.Text>
                    <div>
                    <h6>We are always looking for tools and organization supplies. Here are a few things we could use:</h6>
<li>milk crates or other sturdy storage boxes</li>
<li>scrap lumber for building workbenches and other structures</li>
<li>clear storage display case(s)</li>
<li>cleaning supplies and hand sanitizer
</li><li>general workshop tools + organization</li><li>tackle boxes or similar storage compartments</li>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>At the ReCYCLEry, we are committed to our community.</Card.Title>
                  <Card.Text>
                  <p>We appreciate the ongoing support of our community over the years; all donations are tax deductible.</p>
                  <p>Contact us (bikes@recyclery.org) to coordinate large donations or receive tax deduction forms.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>IN-KIND DONATIONS</Card.Header>
                <Card.Img variant="top" src="/recyccirclelogo.png" width="50" height="auto" />
                <Card.Body>
                  <Card.Title>Bikes, Parts, and Gear</Card.Title>
                  <Card.Text>
                  We accept in-kind donations of bikes, parts, tools, and gear at our shop. Volunteers visit the shop most days, so feel free to leave bikes or other donations on the rack in front of our shop. We are located in the alley behind 108 N Graham St., Chapel Hill, NC.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
            </Tab>
            <Tab eventKey="contact" id="tab-buttons" title="MERCHANDISE">
              <div class="support-content">
                <h3 class="support-header empty-style">Content/links from Kenan???</h3>
              </div>
            </Tab>
          </Tabs>
        </Card>
    </Container>
   );

 }

 export default Support;