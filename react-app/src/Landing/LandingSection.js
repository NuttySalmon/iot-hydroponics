import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./scss/landing.module.scss";
import "../common/scss/components/logos.scss";


const LandingSection = ({children, bg, dark}) => {
  const darkStyle = dark ? style.dark : ''
  const backgroundStyleString = `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)), url(${bg})`
  const backgroundImage = bg ? backgroundStyleString : null
  return (
    <Container className={`${style.landingSection} ${darkStyle}`} style={{ backgroundImage }}>
      {children}
    </Container>
  );
};

export default LandingSection;
