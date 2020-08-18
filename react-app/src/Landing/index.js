import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Title from "./Title";
import MeetTheTeam from "./MeetTheTeam";
import Description from "./Description";
import EbbFlow from "./EbbFlow";
import Footer from "./Footer";
import bgTitle from "./img/lettuce-bg.png";
import ebbFlowDiagram from "./img/ebbflow.png";
import bgWhatHydro from "./img/whatHydro.png";
import bgWhyHydro from "./img/whyHydro.png";
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
        <Title 
          bg={bgTitle} 
          des="HydroGarden will actively monitor the plant’s desired light,
                temperature, and moisture levels for the user. This will allow
                users to grow any desired plant, disregarding weather conditions
                given by the time of year."         
        />
      </Row>
      <Row>
        <MeetTheTeam theTeam={members} />
      </Row>
      <Row>
        <Description 
          title="What is HydroGarden?"
          des="HydroGarden is an IoT hydroponic systems that allow users to create a self-managing environment for plants to thrive in. This product is geared towards individuals who would like to grow their own plants, but are afraid to fail at doing so. This product also allows users that do not believe that they have enough time to continually monitor plant conditions. It ultimately minimizes the amount of time and effort needed for indoor or urban gardening. The irrigation system will allow these people to micro-manage their plants and exceed their expectations."
          bg={bgWhatHydro}
          idTag='more'
        />
      </Row>
      <Row>
        <EbbFlow 
          diagram={ebbFlowDiagram}
          des="HydroGarden implements an ebb and flow method, also known as flood and drain. There are 2 pumps used to handle the water within the reservoir: one to fill the flood tray and another to agitate the water in the bottom reservoir to prevent algae from growing."
        />
      </Row>
      <Row>
        <Description 
          title="Why Hydroponics?"
          des="Hydroponics is a method of growing plants in a water based, nutrient rich solution. This is better for plants to absorb water and nutrients needed to thrive in unorthadox situations. The roots of a plant no longer need to find and rely on soil. There is less water consumption, making this product more environmentally friendly."
          bg={bgWhyHydro}
        />
      </Row>
      <Footer />
    </Container>
  );
};

export default Landing;
