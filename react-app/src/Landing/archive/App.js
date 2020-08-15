import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import HydroPX from "./HydroPX";
import MeetTheTeam from "./MeetTheTeam";
import Hydroponics from "./Hydroponics";
import EbbAndFlow from "./EbbAndFlow";
import WhyHydro from "./WhyHydro";
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <HydroPX />
        <MeetTheTeam />
        <Hydroponics />
        <EbbAndFlow />
        <WhyHydro />
        <footer style={{backgroundColor: "#5D4C09"}}>
          <Container fluid>
            <div className="col-12 text-center">
              <h5 style={{color: "white"}}>
                Copyright © 2020 HydroGarden. All right reserved. | 
                <Button variant="btn btn-foot" style={{color: "white"}}>Terms of Use</Button> 
                | 
                <Button variant="btn btn-foot" style={{color: "white"}}>Privacy Policy</Button>
              </h5>
            </div>
          </Container>
        </footer>
      </div>
      
    );
  }
}

export default App;
