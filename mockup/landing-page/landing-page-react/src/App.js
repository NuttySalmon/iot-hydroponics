import React, { Component } from "react";
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
      </div>
      
    );
  }
}

export default App;
