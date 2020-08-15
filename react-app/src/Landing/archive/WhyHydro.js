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
                                    <span className="logo-title" style={{fontSize: 50}}>Why Hydroponics?</span>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-left">
                                <div class="col mb-4"> 
                                    <p>Hydroponics is a method of growing plants in a water based, nutrient rich solution. This is better for plants to absorb water and nutrients needed to thrive in unorthadox situations. The roots of a plant no longer need to find and rely on soil. There is less water consumption, making this product more environmentally friendly.</p>
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