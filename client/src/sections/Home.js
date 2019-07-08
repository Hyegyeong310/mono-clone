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
          <div className="video-foreground">
            <iframe
              title="background-video"
              width="600"
              heigh="360"
              src="https://www.youtube.com/embed/P-fFQeadRNg?autoplay=1&amp;loop=1;playlist=P-fFQeadRNg&mute=1"
              frameBorder="0"
              allow="autoplay;"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
