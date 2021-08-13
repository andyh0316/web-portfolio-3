import "./VideoBackground.scss";
import React from "react";
import { Component } from "react";

export default class VideoBackground extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-background">
        <div className="video-foreground">
          <iframe
            src={"https://www.youtube.com/embed/" + this.props.youtubeId + "?playlist=" + this.props.youtubeId + "&loop=1&mute=1&autoplay=1&controls=0"}
            style={{ position: "relative", width: "100%", height: "100vh", top: "0px", left: "0px" }}
            frameborder="0"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowfullscreen=""
            allow="autoplay; fullscreen; encrypted-media"
            class="fade-out"
          ></iframe>
        </div>
      </div>
    );
  }
}
