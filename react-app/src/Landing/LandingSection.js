import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./scss/landing.module.scss";
import "../common/scss/components/logos.scss";


const LandingSection = ({children, bg, dark, id}) => {
  const darkStyle = dark ? style.dark : ''
  const backgroundStyleString = `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)), url(${bg})`
  const backgroundImage = bg ? backgroundStyleString : null
  return (
    <Row>
      <Container className={`${style.landingSection} ${darkStyle}`} id={id} style={{ backgroundImage }}>
        {children}
      </Container>
    </Row>
  );
};

export default LandingSection;
