import "./SkillRating.scss";
import React from "react";
import { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee as objectiveIcon } from "@fortawesome/free-solid-svg-icons";
import { faCoffee as skillIcon } from "@fortawesome/free-solid-svg-icons";
import { faCoffee as experienceIcon } from "@fortawesome/free-solid-svg-icons";
import { faCoffee as educationIcon } from "@fortawesome/free-solid-svg-icons";
import { faCoffee as personalIcon } from "@fortawesome/free-solid-svg-icons";

export default class SkillRating extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skill-rating">
        <div className="skill-rating-percent" style={{width: this.props.percentage + "%"}}></div>
      </div>
    );
  }
}
