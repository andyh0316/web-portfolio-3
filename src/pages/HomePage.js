import "./HomePage.scss";
import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import VideoBackground from "components/VideoBackground";

export class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  getHeaderBarComp() {
    return (
      <div id="header-bar">
        <div className="buttons-container">
          <span className="button red"></span>
          <span className="button orange"></span>
          <span className="button green"></span>
        </div>

        <div className="main-text">andy@web-portfolio: ~</div>
      </div>
    );
  }

  getFooterBarComp() {
    return (
      <div id="footer-bar">
        <span className="pre-text">andy@web-portfolio: </span>
        <span className="main-text">
          <span className="text-replacer"></span>
          <span className="text">Portfolio coded entirely from ground up. No external plugins used.</span>
          <span className="text">Copyright © 2019-@DateTime.Now.Year Haitian (Andy) Hong. All Rights Reserved. Not really.</span>
        </span>
        <span className="blinker"></span>
      </div>
    );
  }

  getIntroComp() {
    return (
      <div id="intro" className="screen-panel">
        <VideoBackground youtubeId="J2qDRJdTGow"></VideoBackground>

        {/* <div className="video-background">
          <iframe
            src="https://www.youtube.com/embed/mPnl1aazs98?loop=1&mute=1&autoplay=1&controls=0"
            style={{ position: "relative", width: "100%", height: "100vh", top: "0px", left: "0px" }}
            className="video-background"
            frameborder="0"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowfullscreen=""
            allow="autoplay; fullscreen; encrypted-media"
            class="fade-out"
          ></iframe>
        </div> */}

        <div className="personal-info-container">
          <div className="code-line">
            <span className="code-object-type">SuperDev </span>
            <span className="code-object">dev </span>
            <span className="code-normal">= </span>
            <span className="code-key-word">new </span>
            <span className="code-object-type">SuperDev </span>
          </div>
          <div className="code-line">
            <span className="code-normal">{"{"}</span>
          </div>
          <div className="code-line indent">
            <span className="code-normal">Name = </span>
            <span className="code-string name-string">"Haitian (Andy) Hong"</span>
            <span className="code-normal">,</span>
          </div>
          <div className="code-line indent">
            <span className="code-normal">Role = </span>
            <span className="code-string">"Full Stack Web Developer"</span>
            <span className="code-normal">,</span>
          </div>
          <div className="code-line indent">
            <span className="code-normal">Graduated = </span>
            <span className="code-string">"University of California: San Diego"</span>
            <span className="code-normal">,</span>
          </div>
          <div className="code-line indent">
            <span className="code-normal">Objective = </span>
            <span className="code-string">
              "I can build a web system completely from ground up, covering all aspects needed for a complete product: all the way from UI/UX development design,
              architectural design, front-end development, back-end development, SQL, to server deployment."
            </span>
          </div>
          <div className="code-line">
            <span className="code-normal">{"};"}</span>
          </div>
        </div>

        {/* <svg className="laptop" viewBox="0 0 695 400" version="1.1">
          <g stroke="none" stroke-width="2" fill="#FFFFFF" fill-rule="evenodd" sketchType="MSPage">
            <g id="Laptop" sketchType="MSLayerGroup" transform="translate(1.000000, 1.000000)" stroke="#8492A5">
              <path
                d="M594,0 L98,0 C84.50415,0 73,11.0738184 73,24.7901127 L73,351.027995 L619,351.027985 L619,24.7901127 C618.999971,11.0728209 607.537479,0 594,0 Z"
                id="bezel"
                stroke-width="2"
                fill="none"
                sketchType="MSShapeGroup"
              ></path>
              <circle id="webcam" stroke-width="2" fill="none" sketchType="MSShapeGroup" cx="347" cy="19" r="4"></circle>
              <g id="bottom" transform="translate(0.000000, 351.000000)" sketchType="MSShapeGroup">
                <path
                  d="M640.812,31.01 L51.288,31.01 C20.641,31.01 0,20.494 0,16.022 L0,2.428 C0,1.084 1.335,0 2.995,0 L689.104,0 C690.766,0 692.103,1.084 692.103,2.428 L692.103,16.557 C692.096,20.092 676.112,31.01 640.812,31.01 Z"
                  id="Shape"
                  stroke-width="2"
                  fill="none"
                ></path>
                <path d="M0.5,14.5 L690.242676,14.5" id="Line" stroke-linecap="square"></path>
              </g>
              <rect id="screen" fill="none" sketchType="MSShapeGroup" x="95" y="39" width="501.073853" height="292.009"></rect>
              <path
                d="M421,352 L421,355.087 C421,357.288 416.666719,357.952714 413.386719,357.952714 L278.815286,357.952714 C275.364286,357.952714 271,357.289 271,355.087 L271,352"
                id="touchpad"
                fill="none"
                sketchType="MSShapeGroup"
              ></path>
            </g>
          </g>
        </svg> */}
      </div>
    );
  }

  getProjectComp() {
    return (
      <div id="projects" className="screen-panel">
        Projects: Work in progress
      </div>
    );
  }

  getSkillComp() {
    return <div id="skills" className="screen-panel">
      Haha
    </div>;
  }

  render() {
    return (
      <div className="home-page">
        {this.getHeaderBarComp()}
        {this.getFooterBarComp()}

        {this.getIntroComp()}
        {this.getProjectComp()}
      </div>
    );
  }
}

export default withRouter(HomePage);
