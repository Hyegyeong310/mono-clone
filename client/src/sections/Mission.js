import React, { Component } from 'react';

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

  _onReady = event => {
    event.target.currentTime = 2;
  };

  render() {
    const {
      item: { id, title, subtitle }
    } = this.props;
    const { active } = this.state;

    return (
      <div className="section mission">
        <div className="section-content" id={`section${id}`}>
          <SectionTitle title={title} subtitle={subtitle} />
          <div className={`video-container ${active ? 'fadeIn' : ''}`}>
            <video
              id="introVideo"
              controls="controls"
              preload="auto"
              muted
              title="background-video"
              onLoadedMetadata={this._onReady}
            >
              <source
                src={`${
                  process.env.REACT_APP_AWS_S3
                }videos/introduce_monolabs.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;
