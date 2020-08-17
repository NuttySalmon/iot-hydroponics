import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import style from "./scss/landing.module.scss";
import "../common/scss/components/logos.scss";
import head1 from "./img/head2.jpg";

const DisplayMembers = (props) => {
  return (
    <Col>
      <Row>
        <Image className={`col ${style.head}`} src={props.head} />
      </Row>
      <Row>
        <span className={`col ${style.headName}`}>{props.name}</span>
      </Row>
    </Col>
  );
};

const MeetTheTeam = (props) => {
  return (
    <Container>
      <Row>
        <span className={`col ${style.title}`}>Meet The Team</span>
      </Row>
      <Row>
        <Col>
          <Row className="mb-5">
          {props.theTeam.map( member =>
            <DisplayMembers
                name={member.name}
                head={member.head}
            />
          )}
            
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MeetTheTeam;
