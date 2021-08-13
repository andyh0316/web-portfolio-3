import "./ResumePage.scss";
import React from "react";
import { Component } from "react";

import ResumeSkillRating from "components/ResumeSkillRating";
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
                <ResumeSkillRating percentage={75}></ResumeSkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">UI/UX Design</div>
                <ResumeSkillRating percentage={50}></ResumeSkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">HTML, SCSS/SASS</div>
                <ResumeSkillRating percentage={100}></ResumeSkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">AngularJS (Frontend)</div>
                <ResumeSkillRating percentage={100}></ResumeSkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">ReactJS (Frontend)</div>
                <ResumeSkillRating percentage={80}></ResumeSkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">C# + .NET (Backend)</div>
                <ResumeSkillRating percentage={100}></ResumeSkillRating>
              </div>
              <div className="skill-row"> 
                <div className="skill-title">Microsoft SQL Server (Database)</div>
                <ResumeSkillRating percentage={80}></ResumeSkillRating>
              </div>
              <div className="skill-row">
                <div className="skill-title">AWS, Azure (Server)</div>
                <ResumeSkillRating percentage={50}></ResumeSkillRating>
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
                  <div className="section-row-subtitle">2015 - Present</div>
                </div>
                <div className="section-row-content">
                  Started as a solo developer, I rebuilt the company's student management system from scratch, which launched after 9 months. My responsibilies in the company includes architecture,
                  UI/UX design, frontend implementation, backend implementation, server, multi-tenant SQL administration. After accumulating more clients, we grew to a team of multiple developers who I lead
                  to continue to improve the application. The tech stack I chose to build the main application is AngularJS and C# .NET, and ReactJS and .NET Core for smaller projects later in the years.
                </div>
              </div>

              <div className="section-row">
                <div className="section-row-header">
                  <div className="section-row-title">Freelancing Developer</div>
                  <div className="section-row-subtitle">2019 - 2021</div>
                </div>
                <div className="section-row-content">
                  <div>- Joined GTV as a contractor focused on developing frontend of social media site gettr.com, using reactJS and responsive design concepts. </div>
                  <div>- Joined NewPieTechnology as a contractor and lead an 6 months ecommerce project with 3 developers, using ReactJS and .NET CORE.</div>
                </div>
              </div>

              <div className="section-row">
                <div className="section-row-header">
                  <div className="section-row-title">SupraMed (Now NexTech): Full Stack Developer</div>
                  <div className="section-row-subtitle">2014 - 2015</div>
                </div>
                <div className="section-row-content">
                  Joined a start up company and helped develop an enterprise-scale plastic surgeon EHR software system capable of managing an entire facility's process. My role
                  as the only full stack developer in the team includes designing/developing frontend and developing backend, using AngularJS and .NET. The company was then quickly
                  acquired after only one year.
                </div>
              </div>

              <div className="section-row">
                <div className="section-row-header">
                  <div className="section-row-title">Humana: Junior Backend Engineer</div>
                  <div className="section-row-subtitle">2012 - 2014</div>
                </div>
                <div className="section-row-content">
                  After graduating from college, I was offered with a position as at Humana: nLiven where I helped to develop a grand scale health-care management system for the government. I was assigned to a team of 10 of developers, QA, scrum master and product manager
                  in an Agile environment. After training with my mentor for one month, I quickly started to develop features in C# .NET backend and was appalled at how much more fun and accomplished to program in real life work experience than it was in college.
                  I proactively started seeking some frontend tasks and grew quickly within the company to be more full stack. In 2014, the CTO of nLiven resigned to start his own company SupraMed, in which he asked me to join him in his adventure.
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
