import React from "react";
import { Container } from "react-bootstrap";
import "../common/scss/components/logos.scss";

const Footer = () => {
  return (
    <footer className="p-1" style={{ backgroundColor: "#5D4C09" }}>
      <Container fluid className="col-12 text-center">
        <h5 style={{ color: "white" }}>
          Copyright © 2020 HydroGarden. All right reserved. |{" "}
          <a href="#terms" style={{ color: "white" }}>
            Terms of Use
          </a>{" "}
          |{" "}
          <a href="#policy" style={{ color: "white" }}>
            Privacy Policy
          </a>
        </h5>
      </Container>
    </footer>
  );
};

export default Footer;
