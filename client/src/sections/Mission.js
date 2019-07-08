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

  _onReady(event) {
    event.target.pauseVideo();
  }
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
            <iframe
              title="background-video"
              width="600"
              heigh="360"
              src="https://www.youtube.com/embed/1cBzTjuRfW4"
              frameBorder="0"
              allow="autoplay;"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;
