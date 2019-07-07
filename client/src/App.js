import React, { Component } from 'react';
import './assets/scss/main.scss';
import './App.css';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Navbar from './component/Navbar';
import Footer from './component/Footer';

import Home from './sections/Home';
import Mission from './sections/Mission';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Partner from './sections/Partner';
import Contact from './sections/Contact';

import DummyText from './DummyText';

class App extends Component {
  render() {
    return (
      <div className={`body`}>
        <Helmet>
          <title>Monolabs</title>
          <meta name="description" content="" />
        </Helmet>

        <Home />

        <div id="wrapper">
          <Navbar DummyText={DummyText} />
          <main>
            <Mission item={DummyText[1]} />
            <Problem item={DummyText[2]} />
            <Solution item={DummyText[3]} />
            <Partner item={DummyText[4]} />
            <Contact item={DummyText[5]} />
          </main>
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
