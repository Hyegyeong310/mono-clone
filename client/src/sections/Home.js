import React, { Component } from 'react';
import YouTube from 'react-youtube';

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
    const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    };

    return (
      <div>
        <SlideText />
        <div className="video-background" id="section0">
          <div className="video-foreground">
            <YouTube
              videoId="P-fFQeadRNg"
              opts={videoOptions}
              className="video-iframe"
              onReady={this._onReady}
              onEnd={this._onEnd}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
