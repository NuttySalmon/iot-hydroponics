import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import style from "./scss/landing.module.scss";

const DisplayMembers = ({name, pos, head}) => {
  return (
    <div className={style.head}>
      <Image src={head} className="h-100" roundedCircle />
      <p>{name}</p>
    </div>
  );
};

const Team = ({members}) => {
  return (
    <Container className="align-self-center">
      <Row className="mb-4">
        <Col>
          <h1>The Team</h1>
        </Col>
      </Row>
      <Row className={style.heads}>
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

export default Team;
