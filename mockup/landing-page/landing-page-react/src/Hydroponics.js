import React, { Component } from "react";
import { 
  Container, 
  Row,
  Col
} from "react-bootstrap";

class Hydroponics extends Component {
    render () {
        return (
            <div>
                <Container fluid>
                    <Row className="title-box2">
                        <Container className="title-box-container2">
                            <Col>
                                <Row>
                                    <Col>
                                        <span className="logo-title" >What is Hydroponics?</span>
                                    </Col>
                                </Row>
                                <Row justify-content-md-left>
                                    <Col >
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
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

export default Hydroponics;