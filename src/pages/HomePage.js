import "./HomePage.scss";
import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";

export class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home-page">
        <a onClick={() => this.props.history.push("/resume")}>Resume</a>
      </div>
    );
  }
}

export default withRouter(HomePage);
