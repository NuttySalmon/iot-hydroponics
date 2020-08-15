import React, { Component } from "react";
import { 
  Container, 
  Row,
  Col,
  Button
} from "react-bootstrap";

class HydroPX extends Component {
    render() {
        return (
        <div>
            <Container fluid>
                <Row className="title-box">
                    <Container className="title-box-container">
                        <Col>
                            <Row>
                                <Col>
                                    <span className="logo-title">HydroGarden</span>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col className="mb-4" style={{maxWidth: 900}}>
                                    <p>
                                    HydroGarden will actively monitor the plant’s desired light, temperature, and moisture levels for the user. This will allow users to grow any desired plant, disregarding weather conditions given by the time of year. A dedicated user interface will be designed to allow individuals to manage the environment without physically being there. This is beneficial towards people that may travel more often than others, but would still want to maintain plant life.    
                                    </p>
                                    <Button variant="btn btn-learn">Learn More</Button> {' '}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="d-flex justify-content-center">
                                        <Row>
                                            <Col>
                                                <Button variant="btn btn-trans">Get started</Button>{' '}
                                                <Button variant="btn btn-trans">Login</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Container>
                </Row>
            </Container>
        </div>
        );
    }
}

export default HydroPX;
