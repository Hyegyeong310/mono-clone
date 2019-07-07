import React, { Component } from 'react';
import '../assets/scss/main.scss';
import '../App.css';
import Helmet from 'react-helmet';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Home from '../component/Home';
import Section from '../component/Section';

import { menu } from '../DummyText';

class App extends Component {
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
      <div className={`body`}>
        <Helmet>
          <title>Monolabs</title>
          <meta name="description" content="" />
        </Helmet>

        <div className="video-background" id="section0">
          <Home />
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

        <div id="wrapper">
          <Navbar />
          {menu.map((item, index) => {
            if (index === 0) {
              return '';
            } else {
              return (
                <Section key={index} title={item} id={`section${index}`} />
              );
            }
          })}
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.object
};

export default App;
