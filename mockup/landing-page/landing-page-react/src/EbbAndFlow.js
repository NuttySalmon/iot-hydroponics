import React, { Component } from "react";
import { 
  Container, 
  Row,
  Col,
  Image
} from "react-bootstrap";

class EbbAndFlow extends Component {
    render () {
        return (
            <Container fluid>
                <Row className="title-box3">
                    <div className="col-sm-6 half-left">
                        <Image src={require('./img/ebbflow.jpg')} alt=""/>
                    </div>
                    <div className="col-sm-6 half-right">
                        <Container>
                            <Row>
                                <Col>
                                    <span class="logo-title" >What is "Ebb and Flow?</span>
                                    <div class="row justify-content-md-left">
                                        <div class="col mb-4" > 
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                            </p>
                                        </div>
                                    </div> 
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default EbbAndFlow;
