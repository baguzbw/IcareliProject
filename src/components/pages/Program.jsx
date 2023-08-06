import React, { Component } from "react";
import Header from "../program/HeaderProgram";
import Schedule1 from "../program/Schedule1";
import Schedule2 from "../program/Schedule2";

export default class ProgramPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Schedule1 />
        <Schedule2 />
      </div>
    );
  }
}
