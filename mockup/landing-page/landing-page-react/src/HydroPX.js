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
                                    <span className="logo-title">HydroPX</span>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                    </p>
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
