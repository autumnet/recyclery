import React from "react";
import "../CSS/News.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import backOnBikes from "../Images/backOnBikes.jpeg";
import rachael from "../Images/rachaelFiorentino.jpeg";
import hometownHero from "../Images/hometownHero.jpeg";
import wrenchNight from "../Images/wrenchNight.jpeg";

function News() {
  return (
    <Container className="news" fluid={true}>
      <Card.Body className="title text-center">NEWS</Card.Body>

      <div className="news-content">
        <div id="articles">
          <Row>
            <Col sm={6}>
              <img src={backOnBikes} alt=""></img>
            </Col>
            <Col sm={4}>
              <h2>SAMPLE TITLE</h2>
              <p>date</p>
              <p>Sample body text</p>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <img src={rachael} alt=""></img>
            </Col>
            <Col>
              <h2>SAMPLE TITLE</h2>
              <p>date</p>
              <p>Sample body text</p>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <img src={hometownHero} alt="" />
            </Col>
            <Col>
              <h2>SAMPLE TITLE</h2>
              <p>date</p>
              <p>Sample body text</p>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <img src={wrenchNight} alt="" />
            </Col>
            <Col>
              <h2>SAMPLE TITLE</h2>
              <p>date</p>
              <p>Sample body text</p>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default News;
