import React, { Component } from "react";
import DescAbout from "../about/DescAbout";
import About from "../about/HeaderAbout";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <About />
        <DescAbout />
      </div>
    );
  }
}
