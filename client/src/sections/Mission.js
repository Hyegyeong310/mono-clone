import React, { Component } from 'react';
import YouTube from 'react-youtube';

import SectionTitle from '../component/SectionTitle';

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', event => {
      let missionTop = document
        .querySelector('#section1')
        .getBoundingClientRect().top;
      if (window.scrollY >= missionTop) {
        this.setState({ active: true });
      } else {
        this.setState({ active: false });
      }
    });
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    const {
      item: { id, title, subtitle }
    } = this.props;
    const { active } = this.state;
    const videoOptions = {
      height: '360',
      width: '600'
    };
    return (
      <div className="section mission">
        <div className="section-content" id={`section${id}`}>
          <SectionTitle title={title} subtitle={subtitle} />
          <div className={`video-container ${active ? 'fadeIn' : ''}`}>
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
