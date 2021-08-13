import "./ResumeSkillRating.scss";
import React from "react";
import { Component } from "react";

export default class ResumeSkillRating extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="resume-skill-rating">
        <div className="skill-rating-percent" style={{width: this.props.percentage + "%"}}></div>
      </div>
    );
  }
}
