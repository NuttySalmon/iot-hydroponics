import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Title from "./Title";
import MeetTheTeam from "./MeetTheTeam";
import Footer from "./Footer";
import head1 from "./img/head2.jpg";
import head2 from "./img/head1.jpg";
import head3 from "./img/head4.png";
import head4 from "./img/head3.jpg";

const members = [
  {
    name: "Thomas Chan",
    head: head1,
  },
  {
    name: "Jackson Truong",
    head: head2,
  },
  {
    name: "Jason Chong",
    head: head3,
  },
  {
    name: "Jonathan Naraja",
    head: head4,
  },
];

const Landing = () => {
  return (
    <Container fluid>
      <Row>
        <Title />
      </Row>
      <Row>
        <MeetTheTeam theTeam={members} />
      </Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Footer />
    </Container>
  );
};

export default Landing;
