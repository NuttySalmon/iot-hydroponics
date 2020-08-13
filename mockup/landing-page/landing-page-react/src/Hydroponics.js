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
                                        <span className="logo-title" style={{fontSize: 50}}>What is HydroGarden?</span>
                                    </Col>
                                </Row>
                                <Row justify-content-md-left >
                                    <Col>
                                        <p style={{maxWidth: 900}}>HydroGarden is an IoT hydroponic systems that allow users to create a self-managing environment for plants to thrive in. This product is geared towards individuals who would like to grow their own plants, but are afraid to fail at doing so. This product also allows users that do not believe that they have enough time to continually monitor plant conditions. It ultimately minimizes the amount of time and effort needed for indoor or urban gardening. The irrigation system will allow these people to micro-manage their plants and exceed their expectations.</p>
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