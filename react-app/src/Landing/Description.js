import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./scss/landing.module.scss";
import "../common/scss/components/logos.scss";

const Description = (props) => {
  const {bg, title, des} = props;
  return (
    <div className="full-bg" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${bg})` }}>
      <Container className={style.titleBox2}>
        <Row>
          <Container>
            <Col>
              <Row>
                <Col>
                  <span className="logo-lg" style={{ fontSize: 50 }}>
                    {title}
                  </span>
                </Col>
              </Row>
              <Row className="justify-content-md-left">
                <Col className="mb-4" style={{ maxWidth: 900 }}>
                  <p>
                    {des}
                  </p>
                </Col>
              </Row>
            </Col>
          </Container>
        </Row>
      </Container>
    </div>
  );
};

export default Description;
