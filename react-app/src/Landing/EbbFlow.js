import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import style from "./scss/landing.module.scss";
import "../common/scss/components/logos.scss";

const EbbFlow = (props) => {
  const {diagram, des} = props;
  return (
    <Container fluid>
      <Row>
        <div className={`col-sm-4 half-left ${style.titleBox3}`} style={{ backgroundImage: `url(${diagram})` }}>
          {/* <Image src={diagram} /> */}
        </div>
        <div className="col-sm-6 half-right">
          <Container fluid>
            <Row>
              <Container className={style.titleBox2}>
                <Col>
                  <Row>
                    <Col>
                      <span className="logo-lg" style={{ fontSize: 50, color: "#5D4C09" }}>
                        What is Ebb and Flow?
                      </span>
                    </Col>
                  </Row>
                  <Row justify-content-md-left>
                    <Col className="mb-4">
                      <p style={{ color: "black" }}>
                        {des}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Container>
            </Row>
          </Container>
        </div>
      </Row>
    </Container>
  );
};

export default EbbFlow;
