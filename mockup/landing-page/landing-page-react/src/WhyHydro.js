import React, { Component } from "react";
import { 
    Container, 
    Row,
    Col
  } from "react-bootstrap";

class WhyHydro extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="title-box4">
                    <Container className="title-box-container2">
                        <Col>
                            <Row>
                                <Col>
                                    <span className="logo-title">Why Hydroponics?</span>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-left">
                                <div class="col mb-4"> 
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                                </div>
                            </Row>
                        </Col>
                    </Container>
                </Row>
            </Container>
        );
    }
}

export default WhyHydro;