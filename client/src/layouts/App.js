import React, { Component } from 'react';
import '../assets/scss/main.scss';
import Helmet from 'react-helmet';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

import Main from '../component/Main';
import StickyHeader from '../component/Header';
import Content from '../component/Content';
import Footer from '../component/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
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
      <div className={`body ${this.state.loading}`}>
        <Helmet>
          <title>Monolabs</title>
          <meta name="description" content="" />
        </Helmet>

        <div className="video-background">
          <Main />
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
          <StickyHeader />
          <Content />
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
