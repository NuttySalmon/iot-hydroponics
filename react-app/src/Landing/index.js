import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Title from './Title'
import Team from './Team'
import LandingSection from './LandingSection'
import Footer from './Footer'
import bgTitle from './img/lettuce-bg.jpg'
import ebbFlowDiagram from './img/ebbflow.png'
import bgWhatHydro from './img/whatHydro.jpg'
import bgWhyHydro from './img/whyHydro.jpg'
import head1 from './img/head2.jpg'
import head2 from './img/head1.jpg'
import head3 from './img/head4.png'
import head4 from './img/head3.jpg'
import style from './scss/landing.module.scss'
import bullet1 from './img/chip.svg'
import bullet2 from './img/leaf.svg'
import bullet3 from './img/fast.svg'
import './scss/smooth-scroll.scss'
import Description from './Description'

const members = [
  {
    name: 'Thomas Chan',
    head: head1,
  },
  {
    name: 'Jackson Truong',
    head: head2,
  },
  {
    name: 'Jason Chong',
    head: head3,
  },
  {
    name: 'Jonathan Naraja',
    head: head4,
  },
]

const BulletPoint = ({ bullet, text }) => (
  <Row className="mt-4">
    <Col className={style.bullet}>
      <img
        alt="bullet"
        src={bullet}
        style={{ fill: 'white', height: '62px' }}
      />
    </Col>
    <Col>{text}</Col>
  </Row>
)

const WhatIsHydroGarden = (
  <>
    <BulletPoint bullet={bullet1} text="IoT technology automation" />
    <BulletPoint bullet={bullet2} text="Self-managing enviroment for plants" />
    <BulletPoint bullet={bullet3} text="Minimal effort, minimal time " />
  </>
)

const EbbAndFlow = (
  <>
    <p>Also known as flood and drain:</p>
    <p>1. Flood growtray with nutrients solution</p>
    <p>2. Drain solution back to reservoir</p>
    <p>3. Repeat! </p>
  </>
)

// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const Landing = () => {
  return (
    <Container fluid>
      <Title
        bg={bgTitle}
        des="HydroGarden will actively monitor the plant’s desired light,
                temperature, and moisture levels for the user. This will allow
                users to grow any desired plant, disregarding weather conditions
                given by the time of year."
      />

      <LandingSection id="members">
        <Team {...{ members }} />
      </LandingSection>

      <LandingSection bg={bgWhatHydro} dark id="more">
        <Description title="What is HydroGarden?" des={WhatIsHydroGarden} />
      </LandingSection>

      <LandingSection>
        <Container style={{ display: 'grid' }}>
          <Row className="align-self-center">
            <Col className="text-center mr-5" xl={5}>
              <Image src={ebbFlowDiagram} className="align-self-center" fluid />
            </Col>
            <Col xl>
              <Description title="What is Ebb and Flow?" des={EbbAndFlow} />
            </Col>
          </Row>
        </Container>
      </LandingSection>

      <LandingSection bg={bgWhyHydro} dark>
        <Description
          title="Why Hydroponics?"
          des={[
            'Hydroponics is a method of growing plants in a water based, nutrient rich solution. This is better for plants to absorb water and nutrients needed to thrive in unorthadox situations. The roots of a plant no longer need to find and rely on soil. There is less water consumption, making this product more environmentally friendly.',
          ]}
        />
      </LandingSection>

      <Footer />
    </Container>
  )
}

export default Landing
