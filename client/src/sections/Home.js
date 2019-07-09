import React, { Component } from 'react';

import SlideText from '../component/SlideText';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onReady(event) {
    // event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  render() {
    return (
      <div>
        <SlideText />
        <div className="video-background" id="section0">
          <video autoPlay loop muted title="background-video">
            <source
              src={`${
                process.env.REACT_APP_AWS_S3
              }videos/background_vid_dark.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    );
  }
}

export default Home;
