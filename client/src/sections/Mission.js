import React, { Component } from 'react';
import YouTube from 'react-youtube';

import SectionTitle from '../component/SectionTitle';

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    const {
      item: { id, title, subtitle }
    } = this.props;
    const videoOptions = {
      height: '360',
      width: '600'
    };
    return (
      <div className="section mission">
        <div className="section-content" id={`section${id}`}>
          <SectionTitle title={title} subtitle={subtitle} />
          <div className="video-container">
            <YouTube
              videoId="1cBzTjuRfW4"
              opts={videoOptions}
              onReady={this._onReady}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;
