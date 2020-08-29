import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import style from "./scss/landing.module.scss";
import "../common/scss/components/logos.scss";

const DisplayMembers = ({name, pos, head}) => {
  return (
    <Col>
      <Row>
        <Image className={`col ${style.head}`} style={{objectPosition: pos}} src={head} />
      </Row>
      <Row>
        <span className={`col ${style.headName}`}>{name}</span>
      </Row>
    </Col>
  );
};

const MeetTheTeam = ({members}) => {
  return (
    <Container>
      <Row>
        <span className={`col ${style.title}`}>Meet The Team</span>
      </Row>
      <Row>
        { 
          members.map( ({name, head, pos}) => ( 
            <DisplayMembers
              key={name}
              name={name}
              head={head}
              pos={pos}
            />
          )) 
        } 
      </Row>
    </Container>
  );
};

export default MeetTheTeam;
