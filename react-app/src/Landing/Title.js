import React from "react";
import { Row, Col, Button, Container,} from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./scss/landing.module.scss";
import "../common/scss/components/logos.scss";


const Title = (props) => {
  const {bg, des} = props;
  return (
    <div className="full-bg" style={{ backgroundImage: `url(${bg})` }}>
      <Container className={style.titleBox}>
        <Col className="align-self-center">
          <Row>
            <Col>
              <span className="logo-lg">HydroGarden</span>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className={style.titleDesc}>
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
                    <Link to="/signup">
                      <Button variant="btn btn-trans">Get started</Button>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/login">
                      <Button variant="btn btn-trans">Login</Button>
                    </Link>
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
