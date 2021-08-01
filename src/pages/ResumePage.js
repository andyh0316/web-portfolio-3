import "./ResumePage.scss";
import React from "react";
import { Component } from "react";

import SkillRating from "components/SkillRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye as objectiveIcon } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify as skillIcon } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase as experienceIcon } from "@fortawesome/free-solid-svg-icons";
import { faBuilding as educationIcon } from "@fortawesome/free-solid-svg-icons";
import { faGrimace as personalIcon } from "@fortawesome/free-solid-svg-icons";

export default class ResumePage extends Component {
  render() {
    return (
      <div id="resume-page">
        <div id="header">
          <div className="left-block">
            <div id="name">Andy Hong</div>
            <div id="position">Full Stack Software Engineer</div>
          </div>
          <div className="right-block">
            <div>
              <span>Email: </span>
              <span>Andyhong0316@yahoo.com</span>
            </div>
          </div>
        </div>

        <div id="resume-container-content">
          <div className="section">
            <div className="section-title">
              <FontAwesomeIcon icon={objectiveIcon} className="icon" />
              <div className="title">Objective</div>
            </div>
            <div className="section-content">
              <div className="section-row">
                <div className="section-row-content">
                  As an experienced developer, I am seeking for a position where I can utilize my expertise to build a high quality web application. I can cover every aspect needed for a complete product: 
                  all the way from architectural design, frontend development, backend development to deployment (and even UI/UX design!).
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section-title">
              <FontAwesomeIcon icon={skillIcon} className="icon" />
              <div className="title">Expertise Levels</div>
            </div>
            <div className="section-content">
              <div className="skill-row">
                <div className="skill-title">Software Architecture</div>
                <SkillRating percentage={75}></SkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">UI/UX Design</div>
                <SkillRating percentage={50}></SkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">HTML, SCSS/SASS</div>
                <SkillRating percentage={100}></SkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">AngularJS (Frontend)</div>
                <SkillRating percentage={100}></SkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">ReactJS (Frontend)</div>
                <SkillRating percentage={90}></SkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">C# + .NET (Backend)</div>
                <SkillRating percentage={100}></SkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">Microsoft SQL Server (Database)</div>
                <SkillRating percentage={75}></SkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">AWS, Azure (Server)</div>
                <SkillRating percentage={75}></SkillRating>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section-title">
              <FontAwesomeIcon icon={experienceIcon} className="icon" />
              <div className="title">Work Experience</div>
            </div>
            <div className="section-content">
              <div className="section-row">
                <div className="section-row-header">
                  <div className="section-row-title">Cobro Consulting: Lead Developer</div>
                  <div className="section-row-subtitle">2015 - 2021</div>
                </div>
                <div className="section-row-content">
                  Started as a solo developer, I built the company's core system from scratch, which launched after 9 months and currently generates millions in yearly revenue. The system
                  is a student management system used by more than 100 school districts to manage a total of 600,000 students and 30,000,000 services. My roles in the company includes architecture,
                  UI/UX design, UI implentation, frontend implementation, backend implementation, server, multi-tenant SQL administration, and later grew to a team of multiple developers who I lead
                  to continue to improve the application.
                </div>
              </div>

              <div className="section-row">
                <div className="section-row-header">
                  <div className="section-row-title">GTV: Senior Software Developer</div>
                  <div className="section-row-subtitle">2018 - 2020</div>
                </div>
                <div className="section-row-content">
                  Joined in a large team and focused on developing frontend of two social media sites: gettr.com and gtv.org, using reactJS and responsive design concepts.
                </div>
              </div>

              <div className="section-row">
                <div className="section-row-header">
                  <div className="section-row-title">SupraMed (Now NexTech): Full Stack Developer</div>
                  <div className="section-row-subtitle">2014 - 2015</div>
                </div>
                <div className="section-row-content">
                  Helped develop an enterprise-scale plastic surgeon EHR software system capable of managing an entire facility's process. My role
                  as the only full stack developer in the team includes designing/developing frontend and developing backend.
                </div>
              </div>

              <div className="section-row">
                <div className="section-row-header">
                  <div className="section-row-title">Humana: Junior Software Engineer</div>
                  <div className="section-row-subtitle">2013 - 2014</div>
                </div>
                <div className="section-row-content">
                  Helped developed a grand scale health-care management system for the government. Mainly responsible for backend development and some frontend development. Later mentored an entry
                  level developer for 3 months.
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section-title">
              <FontAwesomeIcon icon={educationIcon} className="icon" />
              <div className="title">Education</div>
            </div>
            <div className="section-content">
              <div className="section-row">
                <div className="section-row-header">
                  <div className="section-row-title">University of California, San Diego: Jacobs School of Engineering</div>
                  <div className="section-row-subtitle">#15 ranked in U.S.A</div>
                </div>
                <div className="section-row-content">Computer Science and Engineering, B.S</div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section-title">
              <FontAwesomeIcon icon={personalIcon} className="icon" />
              <div className="title">Personal</div>
            </div>
            <div className="section-content">
              <div>
                I am an easy-going person. I don't complain. I am very detail oriented yet fast paced engineer. I have a pretty good sense for art and design which I apply to projects at work.
                I suck at creative writing (as you can see here where each sentence begins with I). I like to exercise daily to keep my energy level consistent. Swimming and rope jumping are my favorite 
                exercise activities. I like the color blue.
              </div>
            </div>
          </div>
        </div>

        <div id="footer">Resume written in HTML/SCSS + ReactJS</div>
      </div>
    );
  }
}
