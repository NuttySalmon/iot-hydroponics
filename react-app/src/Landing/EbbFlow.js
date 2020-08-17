import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import style from "./scss/landing.module.scss";
import "../common/scss/components/logos.scss";

const EbbFlow = (props) => {
  const {diagram, des} = props;
  return (
    <Container fluid>
      <Row className={style.titleBox3}>
        <div className="col-sm-6 half-left">
          <Image src={diagram} />
        </div>
        <div className="col-sm-6 half-right  mt-5">
          <Container fluid>
            <Row>
              <Container className={style.titleBox2}>
                <Col>
                  <Row>
                    <Col>
                      <span className="logo-title" style={{ fontSize: 50 }}>
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
