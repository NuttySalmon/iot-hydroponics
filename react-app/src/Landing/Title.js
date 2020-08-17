import React from "react";
import { Row, Col, Button, Container,} from "react-bootstrap";
import style from "./scss/landing.module.scss";
import "../common/scss/components/logos.scss";

const Title = (props) => {
  const {bg, des} = props;
  return (
    <div className="full-bg" style={{ backgroundImage: `url(${bg})` }}>
      <Container className={style.titleBox}>
        <Col>
          <Row>
            <Col>
              <span className="logo-lg">HydroGarden</span>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className="mb-4" style={{ maxWidth: 900 }}>
              <p>
                {des}
                <br />
                <a href="#more">Learn More</a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-flex justify-content-center">
                <Row>
                  <Col>
                    <Button variant="btn btn-trans">Get started</Button>
                  </Col>
                  <Col>
                    <Button variant="btn btn-trans">Login</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Title;
